-- Create site_content table for editable content
CREATE TABLE public.site_content (
  id TEXT PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_roles table for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Site content: Anyone can read, only admins can modify
CREATE POLICY "Anyone can read site content"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Admins can update site content"
  ON public.site_content FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert site content"
  ON public.site_content FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- User roles: Only admins can manage roles
CREATE POLICY "Users can view own role"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Insert default content
INSERT INTO public.site_content (id, content) VALUES
('hero', '{"title": "Evolve. Heal. Transform.", "subtitle": "Restoration is always possible.", "description": "Deep, meaningful connections are the foundation of growth, healing, and transformation. Let''s build a path forward together.", "ctaText": "Book a Complimentary Consultation"}'),
('about', '{"title": "Meet Danielle", "paragraphs": ["Hi, I''m Danielle Woody (she/her), founder of Evolve | Connection Coaching. My journey has been shaped by over a decade of experience in restorative practices, student accountability, conflict resolution, and leadership development.", "At Evolve | Connection Coaching, I believe that healing begins with connection, accountability, and love—for ourselves and for those around us. Life''s challenges can leave us feeling disconnected, but restoration is always possible.", "My mission is to help you restore balance, clarity, and love in your life by using restorative practices that encourage self-reflection, honest communication, personal growth, and meaningful change."], "values": ["Restoration", "Authenticity", "Compassion", "Empowerment", "Connection"]}'),
('services', '{"title": "What We Offer", "subtitle": "Discover the transformative power of restorative coaching for your relationships and personal growth.", "items": [{"title": "Individual Coaching", "price": "$100 - $200 per session", "features": ["Self-reflection & emotional awareness", "Identify patterns that no longer serve you", "Cultivate self-love and confidence", "Set intentional goals for transformation"], "cta": "Book a Session"}, {"title": "Relationship Coaching", "price": "$120 - $250 per session", "features": ["Develop healthier communication skills", "Navigate conflict with honesty and empathy", "Repair and restore relationships after harm", "Build deeper emotional connections and trust"], "cta": "Book a Session"}, {"title": "Life Transitions Coaching", "price": "$120 - $250 per session", "features": ["Find clarity in uncertain times", "Embrace new beginnings with intention", "Process and heal from past experiences", "Develop a roadmap for your next chapter"], "cta": "Book a Session"}, {"title": "Leadership Coaching", "price": "$150 - $300 per session", "features": ["Lead with integrity, empathy, and accountability", "Strengthen emotional intelligence", "Foster trust and collaboration in teams", "Navigate difficult conversations with confidence"], "cta": "Book a Session"}, {"title": "Pre-Marital Coaching", "price": "Starting at $450 (4 sessions)", "features": ["Communication & active listening", "Conflict resolution & restorative dialogue", "Values & relationship expectations", "Family & cultural dynamics"], "cta": "Book a Package"}, {"title": "Wedding Officiating", "price": "$250 - $500", "features": ["Personalized ceremony script", "Assistance with crafting meaningful vows", "Professional officiation on your wedding day", "Marriage license signing & documentation"], "cta": "Learn More"}]}'),
('testimonials', '{"title": "What Clients Say", "subtitle": "Hear from individuals and couples who have experienced transformation through our coaching services.", "items": [{"quote": "Working with Danielle completely transformed how my partner and I communicate. We''ve developed tools to navigate conflict in a way that brings us closer rather than pushing us apart. Her restorative approach helped us break old patterns and build a stronger foundation."}, {"quote": "The leadership coaching I received has profoundly changed how I approach my role as a team manager. Danielle taught me to lead with both accountability and compassion, resulting in improved team dynamics and a more positive work environment."}, {"quote": "After facing a major life transition, I felt completely lost. Through Danielle''s coaching, I developed clarity, confidence, and a renewed sense of purpose. Her guidance helped me transform what felt like an ending into a beautiful new beginning."}]}'),
('workshops', '{"title": "Upcoming Workshops", "subtitle": "Join transformative group experiences focused on healing, growth, and connection.", "items": [{"date": "April 15, 2025", "time": "9:00 AM - 4:00 PM", "title": "Restorative Communication Workshop", "description": "A one-day immersive workshop focused on building effective communication skills through restorative practices.", "highlights": ["Non-judgmental listening techniques", "\"I feel\" statements and constructive dialogue", "Conflict resolution strategies", "Building healthier, more open lines of communication"], "location": "Virtual via Zoom", "cta": "Register Now"}, {"date": "May 20-22, 2025", "time": "Weekend Retreat", "title": "Healing & Empowerment Retreat", "description": "An immersive weekend retreat for individuals seeking personal growth and restoration.", "highlights": ["Restorative circles for sharing and reflection", "Guided meditations and mindfulness practices", "Workshops on forgiveness and embracing self-love", "Building meaningful connections with like-minded individuals"], "location": "Serenity Retreat Center, Maryland", "cta": "Learn More"}]}'),
('contact', '{"title": "Get in Touch", "subtitle": "Have questions or need more information? Reach out directly through our contact form.", "email": "danielle@evolveconnectioncoaching.com"}'),
('booking', '{"title": "Book Your Complimentary Consultation", "subtitle": "Take the first step toward transformation with a free, no-obligation consultation to discuss your goals."}');
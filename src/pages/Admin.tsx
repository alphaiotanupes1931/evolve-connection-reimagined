import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LogOut, Save, Plus, Trash2 } from "lucide-react";
import logo from "@/assets/logo.jpg";

type ContentData = {
  [key: string]: any;
};

const Admin = () => {
  const [content, setContent] = useState<ContentData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchContent();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin/login");
    }
  };

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*");

      if (error) throw error;

      const contentMap: ContentData = {};
      data?.forEach((item) => {
        contentMap[item.id] = item.content;
      });
      setContent(contentMap);
    } catch (error: any) {
      toast.error("Failed to load content");
    } finally {
      setIsLoading(false);
    }
  };

  const saveContent = async (section: string) => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("site_content")
        .update({ content: content[section], updated_at: new Date().toISOString() })
        .eq("id", section);

      if (error) throw error;
      toast.success(`${section} content saved!`);
    } catch (error: any) {
      toast.error("Failed to save content");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const updateField = (section: string, field: string, value: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (section: string, field: string, index: number, value: any) => {
    setContent((prev) => {
      const newArray = [...(prev[section]?.[field] || [])];
      newArray[index] = value;
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray,
        },
      };
    });
  };

  const updateNestedArrayField = (section: string, arrayField: string, index: number, field: string, value: any) => {
    setContent((prev) => {
      const newArray = [...(prev[section]?.[arrayField] || [])];
      newArray[index] = { ...newArray[index], [field]: value };
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [arrayField]: newArray,
        },
      };
    });
  };

  const addArrayItem = (section: string, field: string, defaultValue: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...(prev[section]?.[field] || []), defaultValue],
      },
    }));
  };

  const removeArrayItem = (section: string, field: string, index: number) => {
    setContent((prev) => {
      const newArray = [...(prev[section]?.[field] || [])];
      newArray.splice(index, 1);
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray,
        },
      };
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Evolve" className="h-10 rounded-lg" />
            <span className="font-serif text-xl">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="/" target="_blank">View Site</a>
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="flex flex-wrap gap-2 bg-transparent">
            <TabsTrigger value="hero" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Hero</TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">About</TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Services</TabsTrigger>
            <TabsTrigger value="testimonials" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Testimonials</TabsTrigger>
            <TabsTrigger value="workshops" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Workshops</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Contact</TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Hero Section</CardTitle>
                <Button onClick={() => saveContent("hero")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={content.hero?.title || ""}
                    onChange={(e) => updateField("hero", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Subtitle</Label>
                  <Input
                    value={content.hero?.subtitle || ""}
                    onChange={(e) => updateField("hero", "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={content.hero?.description || ""}
                    onChange={(e) => updateField("hero", "description", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>CTA Button Text</Label>
                  <Input
                    value={content.hero?.ctaText || ""}
                    onChange={(e) => updateField("hero", "ctaText", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section */}
          <TabsContent value="about">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>About Section</CardTitle>
                <Button onClick={() => saveContent("about")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={content.about?.title || ""}
                    onChange={(e) => updateField("about", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Paragraphs</Label>
                  {content.about?.paragraphs?.map((para: string, index: number) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Textarea
                        value={para}
                        onChange={(e) => updateArrayItem("about", "paragraphs", index, e.target.value)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeArrayItem("about", "paragraphs", index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => addArrayItem("about", "paragraphs", "")}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Paragraph
                  </Button>
                </div>
                <div>
                  <Label>Values (comma-separated)</Label>
                  <Input
                    value={content.about?.values?.join(", ") || ""}
                    onChange={(e) => updateField("about", "values", e.target.value.split(", ").filter(Boolean))}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Section */}
          <TabsContent value="services">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Services Section</CardTitle>
                <Button onClick={() => saveContent("services")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Section Title</Label>
                  <Input
                    value={content.services?.title || ""}
                    onChange={(e) => updateField("services", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Section Subtitle</Label>
                  <Input
                    value={content.services?.subtitle || ""}
                    onChange={(e) => updateField("services", "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label className="text-lg font-medium">Services</Label>
                  {content.services?.items?.map((service: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-medium">Service {index + 1}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("services", "items", index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid gap-4">
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={service.title || ""}
                            onChange={(e) => updateNestedArrayField("services", "items", index, "title", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Price</Label>
                          <Input
                            value={service.price || ""}
                            onChange={(e) => updateNestedArrayField("services", "items", index, "price", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Features (one per line)</Label>
                          <Textarea
                            value={service.features?.join("\n") || ""}
                            onChange={(e) => updateNestedArrayField("services", "items", index, "features", e.target.value.split("\n").filter(Boolean))}
                            className="mt-1"
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label>CTA Text</Label>
                          <Input
                            value={service.cta || ""}
                            onChange={(e) => updateNestedArrayField("services", "items", index, "cta", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => addArrayItem("services", "items", { title: "", price: "", features: [], cta: "Book a Session" })}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Section */}
          <TabsContent value="testimonials">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Testimonials Section</CardTitle>
                <Button onClick={() => saveContent("testimonials")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Section Title</Label>
                  <Input
                    value={content.testimonials?.title || ""}
                    onChange={(e) => updateField("testimonials", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Section Subtitle</Label>
                  <Input
                    value={content.testimonials?.subtitle || ""}
                    onChange={(e) => updateField("testimonials", "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label className="text-lg font-medium">Testimonials</Label>
                  {content.testimonials?.items?.map((testimonial: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-medium">Testimonial {index + 1}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("testimonials", "items", index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <Label>Quote</Label>
                        <Textarea
                          value={testimonial.quote || ""}
                          onChange={(e) => updateNestedArrayField("testimonials", "items", index, "quote", e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                    </Card>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => addArrayItem("testimonials", "items", { quote: "" })}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Testimonial
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workshops Section */}
          <TabsContent value="workshops">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Workshops Section</CardTitle>
                <Button onClick={() => saveContent("workshops")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Section Title</Label>
                  <Input
                    value={content.workshops?.title || ""}
                    onChange={(e) => updateField("workshops", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Section Subtitle</Label>
                  <Input
                    value={content.workshops?.subtitle || ""}
                    onChange={(e) => updateField("workshops", "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label className="text-lg font-medium">Events</Label>
                  {content.workshops?.items?.map((workshop: any, index: number) => (
                    <Card key={index} className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-medium">Event {index + 1}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeArrayItem("workshops", "items", index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid gap-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Date</Label>
                            <Input
                              value={workshop.date || ""}
                              onChange={(e) => updateNestedArrayField("workshops", "items", index, "date", e.target.value)}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label>Time</Label>
                            <Input
                              value={workshop.time || ""}
                              onChange={(e) => updateNestedArrayField("workshops", "items", index, "time", e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={workshop.title || ""}
                            onChange={(e) => updateNestedArrayField("workshops", "items", index, "title", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={workshop.description || ""}
                            onChange={(e) => updateNestedArrayField("workshops", "items", index, "description", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Highlights (one per line)</Label>
                          <Textarea
                            value={workshop.highlights?.join("\n") || ""}
                            onChange={(e) => updateNestedArrayField("workshops", "items", index, "highlights", e.target.value.split("\n").filter(Boolean))}
                            className="mt-1"
                            rows={4}
                          />
                        </div>
                        <div>
                          <Label>Location</Label>
                          <Input
                            value={workshop.location || ""}
                            onChange={(e) => updateNestedArrayField("workshops", "items", index, "location", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>CTA Text</Label>
                          <Input
                            value={workshop.cta || ""}
                            onChange={(e) => updateNestedArrayField("workshops", "items", index, "cta", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => addArrayItem("workshops", "items", { date: "", time: "", title: "", description: "", highlights: [], location: "", cta: "Register Now" })}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Section</CardTitle>
                <Button onClick={() => saveContent("contact")} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={content.contact?.title || ""}
                    onChange={(e) => updateField("contact", "title", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Subtitle</Label>
                  <Input
                    value={content.contact?.subtitle || ""}
                    onChange={(e) => updateField("contact", "subtitle", e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    value={content.contact?.email || ""}
                    onChange={(e) => updateField("contact", "email", e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;

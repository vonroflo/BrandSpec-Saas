'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { OutputSection } from '@/components/output-section';
import { BrandSpec } from '@/lib/types';

const formSchema = z.object({
  projectName: z.string().min(1, 'Project name is required'),
  brandFeel: z.string().min(1, 'Brand feel is required'),
  description: z.string().min(1, 'Description is required'),
  primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid hex color'),
  accentColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid hex color'),
  backgroundColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid hex color'),
  surfaceColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid hex color'),
  textColor: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid hex color'),
  headingFont: z.string().min(1, 'Heading font is required'),
  bodyFont: z.string().min(1, 'Body font is required'),
  borderRadius: z.string().min(1, 'Border radius is required'),
  shadowStyle: z.string().min(1, 'Shadow style is required'),
  buttonStyle: z.string().min(1, 'Button style is required'),
  ctaExample: z.string().min(1, 'CTA example is required'),
  errorTone: z.string().min(1, 'Error tone is required'),
});

type FormData = z.infer<typeof formSchema>;

export function BrandForm() {
  const [brandSpec, setBrandSpec] = useState<BrandSpec | null>(null);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      brandFeel: '',
      description: '',
      primaryColor: '#4C1D95',
      accentColor: '#F59E0B',
      backgroundColor: '#FFFFFF',
      surfaceColor: '#F3F4F6',
      textColor: '#111827',
      headingFont: 'DM Serif Display, serif',
      bodyFont: 'Inter, sans-serif',
      borderRadius: 'xl',
      shadowStyle: 'medium',
      buttonStyle: 'pill',
      ctaExample: "Let's Do This!",
      errorTone: 'friendly',
    },
  });

  const onSubmit = (data: FormData) => {
    const spec: BrandSpec = {
      projectName: data.projectName,
      brandFeel: data.brandFeel,
      description: data.description,
      colors: {
        primary: data.primaryColor,
        accent: data.accentColor,
        background: data.backgroundColor,
        surface: data.surfaceColor,
        text: data.textColor,
      },
      typography: {
        headingFont: data.headingFont,
        bodyFont: data.bodyFont,
      },
      geometry: {
        borderRadius: data.borderRadius,
        shadowStyle: data.shadowStyle,
        buttonStyle: data.buttonStyle,
      },
      voice: {
        ctaExample: data.ctaExample,
        errorTone: data.errorTone,
      },
    };
    
    setBrandSpec(spec);
    
    // Scroll to output
    setTimeout(() => {
      document.getElementById('output-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div id="brand-form" className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-3xl text-center mb-12">
            Create Your Brand Spec
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">📝 Project Basics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Name</FormLabel>
                          <FormControl>
                            <Input placeholder="My Awesome SaaS" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="brandFeel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Feel (3 words)</FormLabel>
                          <FormControl>
                            <Input placeholder="Modern, trustworthy, innovative" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brief Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What does your product do? Who is it for?"
                            rows={3}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">🎨 Color Palette</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="primaryColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Color</FormLabel>
                            <div className="flex gap-3">
                              <input
                                type="color"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-16 h-12 rounded-xl border-2"
                              />
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="accentColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Accent Color</FormLabel>
                            <div className="flex gap-3">
                              <input
                                type="color"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-16 h-12 rounded-xl border-2"
                              />
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="backgroundColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Background</FormLabel>
                            <div className="flex gap-3">
                              <input
                                type="color"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-12 h-12 rounded-xl border-2"
                              />
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="surfaceColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Surface</FormLabel>
                            <div className="flex gap-3">
                              <input
                                type="color"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-12 h-12 rounded-xl border-2"
                              />
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="textColor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Text</FormLabel>
                            <div className="flex gap-3">
                              <input
                                type="color"
                                value={field.value}
                                onChange={field.onChange}
                                className="w-12 h-12 rounded-xl border-2"
                              />
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Typography */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">🔤 Typography</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="headingFont"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Heading Font</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select heading font" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="DM Serif Display, serif">DM Serif Display</SelectItem>
                              <SelectItem value="Playfair Display, serif">Playfair Display</SelectItem>
                              <SelectItem value="Inter, sans-serif">Inter</SelectItem>
                              <SelectItem value="Poppins, sans-serif">Poppins</SelectItem>
                              <SelectItem value="Montserrat, sans-serif">Montserrat</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bodyFont"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body Font</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select body font" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Inter, sans-serif">Inter</SelectItem>
                              <SelectItem value="System UI, sans-serif">System UI</SelectItem>
                              <SelectItem value="Source Sans Pro, sans-serif">Source Sans Pro</SelectItem>
                              <SelectItem value="Open Sans, sans-serif">Open Sans</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* UI Geometry */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">🧱 UI Geometry</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="borderRadius"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Border Radius</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select border radius" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sm">Small (4px)</SelectItem>
                              <SelectItem value="md">Medium (8px)</SelectItem>
                              <SelectItem value="lg">Large (12px)</SelectItem>
                              <SelectItem value="xl">Extra Large (32px)</SelectItem>
                              <SelectItem value="full">Pill Shape</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="shadowStyle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Shadow Style</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select shadow style" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              <SelectItem value="subtle">Subtle</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="strong">Strong</SelectItem>
                              <SelectItem value="ambient">Ambient</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="buttonStyle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Button Style</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select button style" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="rounded">Rounded</SelectItem>
                              <SelectItem value="pill">Pill</SelectItem>
                              <SelectItem value="square">Square</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Voice & Tone */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">🧠 Voice & Tone</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="ctaExample"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CTA Style</FormLabel>
                          <FormControl>
                            <Input placeholder="Let's Do This!" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="errorTone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Error Tone</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select error tone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="friendly">Friendly & Human</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="playful">Playful</SelectItem>
                              <SelectItem value="minimal">Minimal</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg hover-scale shadow-ambient"
                >
                  Generate Brand Spec 🚀
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <OutputSection brandSpec={brandSpec} />
    </>
  );
} 
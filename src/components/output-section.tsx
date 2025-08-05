'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrandSpec, ExportFormat } from '@/lib/types';
import { generateMarkdown, generateTailwindConfig, generateCSSVariables, generateFigmaTokens } from '@/lib/brand-generator';
import { downloadFile, copyToClipboard } from '@/lib/utils';
import { Copy, Download } from 'lucide-react';

interface OutputSectionProps {
  brandSpec: BrandSpec | null;
}

export function OutputSection({ brandSpec }: OutputSectionProps) {
  const [activeTab, setActiveTab] = useState<ExportFormat>('markdown');

  if (!brandSpec) return null;

  const getOutputContent = (format: ExportFormat) => {
    switch (format) {
      case 'markdown':
        return generateMarkdown(brandSpec);
      case 'tailwind':
        return generateTailwindConfig(brandSpec);
      case 'css':
        return generateCSSVariables(brandSpec);
      case 'figma':
        return generateFigmaTokens(brandSpec);
      default:
        return '';
    }
  };

  const getFileExtension = (format: ExportFormat) => {
    switch (format) {
      case 'markdown':
        return 'md';
      case 'tailwind':
        return 'js';
      case 'css':
        return 'css';
      case 'figma':
        return 'json';
      default:
        return 'txt';
    }
  };

  const handleDownload = () => {
    const content = getOutputContent(activeTab);
    const extension = getFileExtension(activeTab);
    const filename = `${brandSpec.projectName.toLowerCase().replace(/\s+/g, '-')}-brand-spec.${extension}`;
    downloadFile(content, filename);
  };

  const handleCopy = async () => {
    const content = getOutputContent(activeTab);
    await copyToClipboard(content);
    // You could add a toast notification here
  };

  return (
    <div id="output-section" className="py-16 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-heading text-3xl text-center mb-12">
          Your Brand Specification
        </h2>
        
        <Card className="shadow-ambient">
          <CardHeader>
            <CardTitle className="font-heading">📋 {brandSpec.projectName} Brand Spec</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ExportFormat)}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="markdown">Markdown</TabsTrigger>
                <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
                <TabsTrigger value="figma">Figma</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Generated {activeTab.toUpperCase()} Output</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDownload}
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
                    <code>{getOutputContent(activeTab)}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
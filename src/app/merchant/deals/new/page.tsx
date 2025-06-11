"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Save, Upload } from "lucide-react";
import { format } from "date-fns";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import Jodit to avoid SSR issues
// const JoditEditor = dynamic(() => import("jodit-react"), { 
//   ssr: false,
//   loading: () => <p>Loading editor...</p>
// });

export default function CreateDealPage() {
  const router = useRouter();
  const [isDraft, setIsDraft] = useState(true);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [dealData, setDealData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    originalPrice: "",
    discountedPrice: "",
    couponCode: "",
    terms: "",
    images: [] as string[],
  });
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsUploading(true);
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setDealData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl]
      }));
      setIsUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      ...dealData,
      isDraft,
      startDate,
      endDate
    });
    router.push("/deals");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Create New Deal</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch 
              id="draft-mode" 
              checked={!isDraft}
              onCheckedChange={(checked) => setIsDraft(!checked)}
            />
            <Label htmlFor="draft-mode">
              {isDraft ? "Draft" : "Publish"}
            </Label>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            form="deal-form"
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            {isDraft ? "Save as Draft" : "Publish Deal"}
          </Button>
        </div>
      </div>

      <form id="deal-form" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left Column - Deal Details */}
          <div className="space-y-6 md:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Deal Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Deal Title*</Label>
                  <Input
                    id="title"
                    placeholder="e.g. 50% Off Office 2021"
                    value={dealData.title}
                    onChange={(e) => setDealData({...dealData, title: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="short-description">Short Description*</Label>
                  <Input
                    id="short-description"
                    placeholder="Brief description shown in listings"
                    value={dealData.shortDescription}
                    onChange={(e) => setDealData({...dealData, shortDescription: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Full Description*</Label>
                  
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Pricing</h2>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="original-price">Original Price*</Label>
                  <Input
                    id="original-price"
                    placeholder="$99.00"
                    type="number"
                    value={dealData.originalPrice}
                    onChange={(e) => setDealData({...dealData, originalPrice: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discounted-price">Discounted Price*</Label>
                  <Input
                    id="discounted-price"
                    placeholder="$49.00"
                    type="number"
                    value={dealData.discountedPrice}
                    onChange={(e) => setDealData({...dealData, discountedPrice: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coupon-code">Coupon Code (Optional)</Label>
                  <Input
                    id="coupon-code"
                    placeholder="SUMMER25"
                    value={dealData.couponCode}
                    onChange={(e) => setDealData({...dealData, couponCode: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Terms & Conditions</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md">
                  {/* <JoditEditor
                    value={dealData.terms}
                    onChange={(content) => setDealData({...dealData, terms: content})}
                    config={{
                      height: 200,
                      buttons: [
                        'bold', 'italic', 'ul', 'ol', 'link'
                      ]
                    }}
                  /> */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Settings */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Deal Images</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 grid-cols-2">
                  {dealData.images.map((image, index) => (
                    <div key={index} className="relative aspect-square">
                      <Image
                        src={image}
                        alt={`Deal image ${index + 1}`}
                        className="rounded-md object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <label className="flex items-center justify-center aspect-square border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50">
                    <div className="text-center p-4">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Upload Image
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </label>
                </div>
                {isUploading && (
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Availability</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="featured" />
                  <Label htmlFor="featured">Feature this deal</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Categories</h2>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Software", "Electronics", "Home Goods", "Fashion", "Food"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={category.toLowerCase()}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor={category.toLowerCase()}>{category}</Label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  PlusCircle,
  Edit2,
  BarChart2,
  Clock,
  CheckCircle2,
  XCircle,
  Grid,
  Table,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Table as ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample deal data
const dealData = {
  active: [
    {
      id: 1,
      title: "50% Off Office 2021",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      status: "active",
      redemptionRate: 78,
      clicks: 1243,
      sales: 842,
      startDate: "2023-10-15",
      endDate: "2023-12-31",
    },
    {
      id: 2,
      title: "Wireless Earbuds Bundle",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      status: "active",
      redemptionRate: 65,
      clicks: 892,
      sales: 580,
      startDate: "2023-11-01",
      endDate: "2023-12-15",
    },
  ],
  draft: [
    {
      id: 3,
      title: "Winter Apparel Sale",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      status: "draft",
      redemptionRate: 0,
      clicks: 0,
      sales: 0,
    },
  ],
  expired: [
    {
      id: 4,
      title: "Back to School Special",
      image: "https://images.unsplash.com/photo-1694395998892-5225e95b8a47?q=80&w=400",
      status: "expired",
      redemptionRate: 42,
      clicks: 2104,
      sales: 884,
      endDate: "2023-09-30",
    },
  ],
};

export default function DealDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDeals, setActiveDeals] = useState(dealData.active);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const toggleDealStatus = (dealId: number) => {
    setActiveDeals(activeDeals.map(deal => 
      deal.id === dealId 
        ? { ...deal, status: deal.status === "active" ? "paused" : "active" } 
        : deal
    ));
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "table" : "grid");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold">Deal Management</h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Input
            placeholder="Search deals..."
            className="max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline" size="icon" onClick={toggleViewMode}>
            {viewMode === "grid" ? <Table className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
          </Button>
          <Button asChild>
            <Link href="/merchant/deals/new" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              New Deal
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="active" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="active" className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Active ({dealData.active.length})
            </TabsTrigger>
            <TabsTrigger value="draft" className="flex items-center gap-2">
              <Edit2 className="h-4 w-4" />
              Draft ({dealData.draft.length})
            </TabsTrigger>
            <TabsTrigger value="expired" className="flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Expired ({dealData.expired.length})
            </TabsTrigger>
          </TabsList>
          {viewMode === "table" && (
            <div className="text-sm text-muted-foreground">
              Showing {activeDeals.length} items
            </div>
          )}
        </div>

        {/* Active Deals Tab */}
        <TabsContent value="active">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {activeDeals.map((deal) => (
                <Card key={deal.id} className="hover:shadow-md transition-shadow pt-0">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <Badge 
                        variant={deal.status === "active" ? "default" : "secondary"} 
                        className="absolute top-2 left-2"
                      >
                        {deal.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{deal.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={deal.status === "active"}
                          onCheckedChange={() => toggleDealStatus(deal.id)}
                        />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Redemption Rate</span>
                        <span>{deal.redemptionRate}%</span>
                      </div>
                      <Progress value={deal.redemptionRate} className="h-2" />
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Clicks</p>
                          <p className="font-medium">{deal.clicks}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Sales</p>
                          <p className="font-medium">{deal.sales}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Clock className="h-4 w-4" />
                        <span>Ends {deal.endDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/deals/${deal.id}/analytics`} className="flex items-center gap-2">
                        <BarChart2 className="h-4 w-4" />
                        Analytics
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/deals/${deal.id}/edit`} className="flex items-center gap-2">
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <ShadTable>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Redemption Rate</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeDeals.map((deal) => (
                    <TableRow key={deal.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12">
                            <Image
                              src={deal.image}
                              alt={deal.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          {deal.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={deal.status === "active" ? "default" : "secondary"}>
                          {deal.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={deal.redemptionRate} className="h-2 w-24" />
                          <span>{deal.redemptionRate}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{deal.clicks}</TableCell>
                      <TableCell>{deal.sales}</TableCell>
                      <TableCell>{deal.endDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={deal.status === "active"}
                            onCheckedChange={() => toggleDealStatus(deal.id)}
                          />
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/deals/${deal.id}/edit`}>
                              <Edit2 className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ShadTable>
            </Card>
          )}
        </TabsContent>

        {/* Draft Deals Tab */}
        <TabsContent value="draft">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {dealData.draft.map((deal) => (
                <Card key={deal.id} className="mt-0 py-0">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4 min-h-[300px]">
                    <div className="relative h-32 w-full bg-muted rounded-md">
                      {deal.image && (
                        <Image
                          src={deal.image}
                          alt={deal.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-medium">{deal.title}</h3>
                    <Badge variant="secondary">Draft</Badge>
                    <Button asChild className="w-full">
                      <Link href={`/deals/${deal.id}/edit`}>
                        Continue Editing
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <ShadTable>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dealData.draft.map((deal) => (
                    <TableRow key={deal.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 bg-muted rounded-md">
                            {deal.image && (
                              <Image
                                src={deal.image}
                                alt={deal.title}
                                fill
                                className="object-cover rounded-md"
                              />
                            )}
                          </div>
                          {deal.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Draft</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/deals/${deal.id}/edit`}>
                            Edit Draft
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ShadTable>
            </Card>
          )}
        </TabsContent>

        {/* Expired Deals Tab */}
        <TabsContent value="expired">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {dealData.expired.map((deal) => (
                <Card key={deal.id} className="opacity-80 pt-0">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <Badge variant="destructive" className="absolute top-2 left-2">
                        Expired
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="text-lg">{deal.title}</CardTitle>
                    <div className="mt-4 space-y-2">
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Clicks</p>
                          <p className="font-medium">{deal.clicks}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Sales</p>
                          <p className="font-medium">{deal.sales}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <XCircle className="h-4 w-4" />
                        <span>Ended {deal.endDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/deals/${deal.id}/analytics`}>
                        View Analytics
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/deals/${deal.id}/renew`}>
                        Renew Deal
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <ShadTable>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dealData.expired.map((deal) => (
                    <TableRow key={deal.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12">
                            <Image
                              src={deal.image}
                              alt={deal.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          {deal.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Expired</Badge>
                      </TableCell>
                      <TableCell>{deal.clicks}</TableCell>
                      <TableCell>{deal.sales}</TableCell>
                      <TableCell>{deal.endDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/deals/${deal.id}/analytics`}>
                              Analytics
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/deals/${deal.id}/renew`}>
                              Renew
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ShadTable>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
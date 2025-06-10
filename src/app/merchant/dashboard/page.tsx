"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

type Deal = {
  id: number;
  title: string;
  price: number;
  status: "published" | "unpublished";
};

const initialDeals: Deal[] = [
  { id: 1, title: "50% Off Pizza", price: 10, status: "published" },
  { id: 2, title: "Buy 1 Get 1 Coffee", price: 5, status: "published" },
  { id: 3, title: "30% Off Jewelry", price: 100, status: "unpublished" },
];

const MerchantDashboard = () => {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [selectedDeals, setSelectedDeals] = useState<number[]>([]);
  const [editDeal, setEditDeal] = useState<Deal | null>(null);

  // Select single deal
  const handleSelect = (id: number) => {
    setSelectedDeals((prev) =>
      prev.includes(id) ? prev.filter((dealId) => dealId !== id) : [...prev, id]
    );
  };

  // Select all deals
  const handleSelectAll = () => {
    if (selectedDeals.length === deals.length) {
      setSelectedDeals([]);
    } else {
      setSelectedDeals(deals.map((deal) => deal.id));
    }
  };

  // Delete single or bulk
  const handleDelete = (ids: number[]) => {
    setDeals((prev) => prev.filter((deal) => !ids.includes(deal.id)));
    setSelectedDeals([]);
    toast.success(`Deleted ${ids.length} deal(s)`);
  };

  // Unpublish single or bulk
  const handleUnpublish = (ids: number[]) => {
    setDeals((prev) =>
      prev.map((deal) =>
        ids.includes(deal.id) ? { ...deal, status: "unpublished" } : deal
      )
    );
    setSelectedDeals([]);
    toast.success(`Unpublished ${ids.length} deal(s)`);
  };

  // Update deal after edit
  const handleUpdateDeal = () => {
    if (editDeal) {
      setDeals((prev) =>
        prev.map((deal) => (deal.id === editDeal.id ? editDeal : deal))
      );
      setEditDeal(null);
      toast.success("Deal updated successfully");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Merchant Dashboard</h1>
      <Separator />

      {/* Bulk Action Toolbar */}
      {selectedDeals.length > 0 && (
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded">
          <span>{selectedDeals.length} selected</span>
          <Button onClick={() => handleUnpublish(selectedDeals)}>Bulk Unpublish</Button>
          <Button variant="destructive" onClick={() => handleDelete(selectedDeals)}>Bulk Delete</Button>
        </div>
      )}

      {/* Deals Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox
                checked={selectedDeals.length === deals.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price ($)</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id}>
              <TableCell>
                <Checkbox
                  checked={selectedDeals.includes(deal.id)}
                  onCheckedChange={() => handleSelect(deal.id)}
                />
              </TableCell>
              <TableCell>{deal.title}</TableCell>
              <TableCell>{deal.price}</TableCell>
              <TableCell>{deal.status}</TableCell>
              <TableCell className="space-x-2">
                <Button size="sm" onClick={() => setEditDeal(deal)}>Edit</Button>
                <Button size="sm" variant="outline" onClick={() => handleUnpublish([deal.id])}>Unpublish</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete([deal.id])}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Deal Modal */}
      <Dialog open={!!editDeal} onOpenChange={() => setEditDeal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Deal</DialogTitle>
          </DialogHeader>
          {editDeal && (
            <div className="space-y-4">
              <Input
                value={editDeal.title}
                onChange={(e) => setEditDeal({ ...editDeal, title: e.target.value })}
                placeholder="Deal Title"
              />
              <Input
                type="number"
                value={editDeal.price}
                onChange={(e) => setEditDeal({ ...editDeal, price: +e.target.value })}
                placeholder="Price"
              />
              <Button onClick={handleUpdateDeal}>Save Changes</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MerchantDashboard;

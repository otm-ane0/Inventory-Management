
import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ScanIcon, PackageIcon } from "lucide-react";

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState("");
  const [scannedProduct, setScannedProduct] = useState(null);

  const startScanning = () => {
    setIsScanning(true);
    
    // Simulate a scanning process
    toast("Scanner activated", {
      description: "Point your camera at a barcode or QR code",
    });
    
    // Simulate finding a product after 3 seconds
    setTimeout(() => {
      setIsScanning(false);
      const mockProduct = {
        id: "P1043",
        name: "Wireless Headphones",
        sku: "WH-BT-1043",
        barcode: "978020137962",
        category: "Electronics",
        location: "Warehouse A, Shelf B3",
        inStock: 34,
        unitPrice: 89.99,
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=Headphones",
      };
      
      setScannedProduct(mockProduct);
      
      toast.success("Product found!", {
        description: `${mockProduct.name} (${mockProduct.sku})`,
      });
    }, 3000);
  };
  
  const handleManualSubmit = (e) => {
    e.preventDefault();
    
    if (!manualCode) {
      toast.error("Please enter a barcode or SKU");
      return;
    }
    
    toast.info("Searching...");
    
    // Simulate finding a product after 1 second
    setTimeout(() => {
      const mockProduct = {
        id: "P5021",
        name: "USB-C Cable 2m",
        sku: "ACC-USB-5021",
        barcode: manualCode,
        category: "Accessories",
        location: "Warehouse B, Shelf D7",
        inStock: 152,
        unitPrice: 12.99,
        image: "https://placehold.co/300x300/e2e8f0/1e293b?text=USB+Cable",
      };
      
      setScannedProduct(mockProduct);
      
      toast.success("Product found!", {
        description: `${mockProduct.name} (${mockProduct.sku})`,
      });
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Barcode Scanner</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Scan Barcode/QR Code</CardTitle>
            <CardDescription>
              Use your device's camera to scan product codes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className={`border-2 ${isScanning ? 'border-primary' : 'border-dashed'} rounded-lg p-4 w-full h-64 flex flex-col items-center justify-center`}>
              {isScanning ? (
                <>
                  <div className="w-full h-full relative bg-muted rounded-md">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-[scan_3s_ease-in-out_infinite]"></div>
                    <div className="flex items-center justify-center h-full">
                      <p className="text-sm">Scanner active...</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsScanning(false)}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <ScanIcon className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">Camera preview will appear here</p>
                  <Button onClick={startScanning}>
                    <ScanIcon className="h-4 w-4 mr-2" />
                    Start Scanner
                  </Button>
                </>
              )}
            </div>
            
            <div className="w-full">
              <form onSubmit={handleManualSubmit} className="flex space-x-2">
                <div className="flex-grow">
                  <Label htmlFor="manual-code" className="sr-only">
                    Enter barcode manually
                  </Label>
                  <Input
                    id="manual-code"
                    placeholder="Enter barcode or SKU manually..."
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scanned Product</CardTitle>
            <CardDescription>
              Product details will appear here after scanning
            </CardDescription>
          </CardHeader>
          <CardContent>
            {scannedProduct ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
                    <img 
                      src={scannedProduct.image} 
                      alt={scannedProduct.name}
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{scannedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">SKU: {scannedProduct.sku}</p>
                    <p className="text-sm text-muted-foreground">Barcode: {scannedProduct.barcode}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-muted p-3 rounded">
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{scannedProduct.category}</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="text-muted-foreground">In Stock</p>
                    <p className="font-medium">{scannedProduct.inStock} units</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">{scannedProduct.location}</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="text-muted-foreground">Unit Price</p>
                    <p className="font-medium">${scannedProduct.unitPrice.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">
                    Adjust Stock
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-muted-foreground">
                <PackageIcon className="h-10 w-10 mb-2" />
                <p>No product scanned yet</p>
                <p className="text-sm">Scan a barcode or enter a code manually</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Scan;

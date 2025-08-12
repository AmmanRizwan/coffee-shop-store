import { Dialog, DialogDescription, DialogHeader, DialogContent, DialogTrigger, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const EditAddress = () => {
    return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="w-full">Edit Address</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
            <DialogDescription>
              Make changes to your address here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="address-1">Address Line 1</Label>
              <Input id="address-1" name="address-1" defaultValue="123 Coffee Lane" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="address-2">Address Line 2</Label>
              <Input id="address-2" name="address-2" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="city">City Name</Label>
              <Input id="city" name="city" defaultValue="Kolkata" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pin">Pin Number</Label>
              <Input id="pin" name="pin" defaultValue="700039" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {/* Save Edit Changes */}
            <DialogClose>
                <Button>Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    )
}

export default EditAddress;
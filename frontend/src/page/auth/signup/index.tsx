import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginSignBanner from "@/assets/login_logo.png"
import CoffeeLogo from "@/assets/coffee_shop.png"
import HighLightTemp from "@/assets/highlight_temp.png";

export default function SignUp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Multiple decorative watermarks */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Large centered watermark */}
        <img
          src={HighLightTemp}
          alt="Background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[150%] min-h-[150%] w-auto h-auto max-w-none opacity-[0.5] object-cover rounded-full rotate-12 blur-[2px]"
        />
        {/* Top-left watermark */}
        <img
          src={HighLightTemp}
          alt=""
          className="absolute -top-20 -left-20 w-[400px] opacity-[0.5] rounded-full -rotate-45 blur-[1px]"
        />
        {/* Bottom-right watermark */}
        <img
          src={HighLightTemp}
          alt=""
          className="absolute -bottom-20 -right-20 w-[500px] opacity-[0.5] rounded-full rotate-[60deg] blur-[1px]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background/20" />
    <div className="w-full max-w-sm md:max-w-3xl relative z-10">
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <div>
                    <img className="w-45" src={CoffeeLogo} />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" placeholder="•••••••••" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={LoginSignBanner}
              alt="Image"
              className="absolute inset-0 h-full w-full dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
    </div>
    </div>
  )
}
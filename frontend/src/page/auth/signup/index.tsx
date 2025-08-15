import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import HighLightTemp from "@/assets/highlight_temp.png";
import CoffeeLogo from "@/assets/coffee_shop.png"
import { useState } from "react"

const SignUp = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
    const [step, setStep] = useState<'base' | 'otp'>('base');
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // });

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (step === 'base') {
    //         // Validate and proceed to OTP
    //         setStep('otp');
    //     } else {
    //         // Handle OTP verification
    //         console.log('OTP verification submitted');
    //     }
    // };

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
    <div className="w-full max-w-sm relative z-10">
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card>
                    <CardHeader>
                        <div className="flex flex-col items-center text-center">
                            <div>
                                <img className="w-45" src={CoffeeLogo} alt="Coffee Logo" />
                            </div>
                        </div>
                        <CardTitle className="text-center my-2 text-lg">{step === 'base' ? 'Create your account' : 'Verify OTP'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form >{/*  onSubmit={handleSubmit} */}
                            {step === 'base' ? (
                                <div className="flex flex-col gap-6">
                                    {/* Name row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Last Name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            required
                                        />
                                    </div>
                                    {/* Password */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="•••••••••" 
                                            required
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-6">
                                    <div className="text-center text-sm text-muted-foreground">
                                        We've sent a verification code to<br/>
                                        <span className="font-medium text-foreground">{"email"}</span>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="otp">Enter Verification Code</Label>
                                        <Input
                                            id="otp"
                                            placeholder="Enter OTP"
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="mt-6 flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    {step === 'base' ? 'Continue' : 'Verify & Create Account'}
                                </Button>
                                {step === 'otp' && (
                                    <Button 
                                        type="button" 
                                        variant="ghost" 
                                        className="text-sm"
                                        onClick={() => setStep('base')}
                                    >
                                        ← Go back
                                    </Button>
                                )}
                           <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="/login" className="underline underline-offset-4">
                                Login
                                </a>
                            </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
        </div>
    )
}

export default SignUp;
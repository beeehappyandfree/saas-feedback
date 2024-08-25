import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { useState } from "react";

export const Widget = () => {
    const [rating, setRating] = useState(3);

    const onSelectStar = (index) => {
        setRating(index + 1)
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button className="rounded-full shadow-lg hover:scale-105">Feedback</Button>
            <div>
                <h3 className="text-lg font-bold">Send us your feedback</h3>
                <form className="space-y-2">
                    <div className="grid grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlfor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlfor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlfor="feedback">Feedback</Label>
                        <Textarea
                            className="min-h-[100px]"
                            id="feedback"
                            placeholder="Tell us what you think"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} className={`h-5 w-5 cursor-pointer ${rating > index ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                            onClick={() => onSelectStar(index)}
                            />
                        ))}
                    </div>
                    <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function StarIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classname="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    )
}
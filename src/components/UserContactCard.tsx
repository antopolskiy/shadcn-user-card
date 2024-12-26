import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  company: string;
}

interface UserContactCardProps {
  user: User;
}

export function UserContactCard({ user }: UserContactCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="w-16 h-16">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          {user.jobTitle && (
            <p className="text-sm text-muted-foreground">{user.jobTitle}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
          <a href={`mailto:${user.email}`} className="text-sm hover:underline">
            {user.email}
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
          <a href={`tel:${user.phone}`} className="text-sm hover:underline">
            {user.phone}
          </a>
        </div>
        {user.address && (
          <div className="flex items-start">
            <MapPin className="w-4 h-4 mr-2 mt-1 text-muted-foreground" />
            <address className="text-sm not-italic">
              {user.address.street}
              <br />
              {user.address.city}, {user.address.state} {user.address.zipCode}
              <br />
              {user.address.country}
            </address>
          </div>
        )}
        {user.company && (
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{user.company}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { UserContactCard } from '../components/UserContactCard';

// This would typically come from an API call
const mockUser = {
  "id": "d30695a0-e6dc-43f3-9247-758e516f66a6",
  "name": "Wilson Bartoletti",
  "email": "Irwin.Franey@yahoo.com",
  "phone": "989.316.0755",
  "address": {
    "street": "929 Ashtyn Passage",
    "city": "Morissetteworth",
    "state": "Iowa",
    "zipCode": "97720-1164",
    "country": "Bahrain"
  },
  "company": "Deckow - Muller",
  "jobTitle": "Future Solutions Officer",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/50.jpg"
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <UserContactCard user={mockUser} />
    </main>
  );
}


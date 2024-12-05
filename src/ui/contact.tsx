import React from "react";
import { Mail, Phone } from "lucide-react";

interface Contact {
  name: string;
  email: string;
  phone?: string;
}

const ContactItem: React.FC<Contact> = ({ name, email, phone }) => (
  <div className="group flex flex-col space-y-2">
    {/* Name and messenger badge */}
    <div className="relative flex items-center justify-between">
      <h3 className="font-medium text-gray-900">{name}</h3>
    </div>

    {/* Contact links with hover effects */}
    <div className="space-y-3">
      <div className="flex items-center py-1 text-sm text-gray-600">
        <Mail className="mr-2 h-4 w-4 shrink-0" />
        {email}
      </div>

      {phone && (
        <div className="flex items-center py-1 text-sm text-gray-600">
          <Phone className="mr-2 h-4 w-4" />
          {phone}
        </div>
      )}
    </div>
  </div>
);

const ContactFooter: React.FC = () => {
  const contacts: Contact[] = [
    {
      name: "Matěj Mikuláš Píše",
      email: "matej.mikulas.pise@gmail.com",
      phone: "+420 603 219 394",
    },
    {
      name: "Barbora Píšová",
      email: "bara_pisova@seznam.cz",
    },
    {
      name: "Pavlína Gremlicová",
      email: "whitelineczech@seznam.cz",
    },
  ];

  return (
    <footer className="w-full primary-bg py-8 border-t-2 border-gray-300 mt-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-medium text-gray-900">Kontakty</h2>
          <p className="mt-2 text-sm text-gray-500">Ozvěte se nám</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {contacts.map((contact) => (
            <ContactItem key={contact.email} {...contact} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

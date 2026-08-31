import React from 'react';
import { CookieIcon } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';
import { cookiesDocument } from '../data/legal';

export function CookiesPage() {
  return (
    <LegalPage
      document={cookiesDocument}
      icon={<CookieIcon size={32} aria-hidden="true" className="text-blue-400 flex-shrink-0" />} />);


}
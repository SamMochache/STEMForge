import React from 'react';
import { ShieldCheckIcon } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';
import { privacyDocument } from '../data/legal';

export function PrivacyPage() {
  return (
    <LegalPage
      document={privacyDocument}
      icon={
      <ShieldCheckIcon size={32} aria-hidden="true" className="text-blue-400 flex-shrink-0" />
      } />);


}
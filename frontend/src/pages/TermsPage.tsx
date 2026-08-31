import React from 'react';
import { FileTextIcon } from 'lucide-react';
import { LegalPage } from '../components/LegalPage';
import { termsDocument } from '../data/legal';

export function TermsPage() {
  return (
    <LegalPage
      document={termsDocument}
      icon={<FileTextIcon size={32} aria-hidden="true" className="text-blue-400 flex-shrink-0" />} />);


}
import React from 'react';

export interface IconCardProps {
  icon: React.ReactNode;
  title: string;
}

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
    question: string;
    answer: string;
}
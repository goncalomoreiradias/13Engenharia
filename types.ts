import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  items: string[];
  icon: React.ComponentType<any>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
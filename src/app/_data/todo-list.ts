import { instruction } from './instruction';
import { training } from './training';
import { tool } from './tool';
import { company } from './company';
import { continuingEducation } from './continuing-education';
import { organisation } from './organisation';

export const todoList = {
  main: [
    {
      name: 'Belehrungen',
      todoLinks: instruction,
      color: '#E93F1B'
    },
    {
      name: 'Schulungen',
      todoLinks: training,
      color: '#DAF7A6'
    },
    {
      name: 'Tools',
      todoLinks: tool,
      color: '#123456'
    },
    {
      name: 'Die Techbude',
      todoLinks: company,
      color: '#123456'
    },
    {
      name: 'Weiterbildung',
      todoLinks: continuingEducation,
      color: '#123456'
    },
    {
      name: 'Organisatorisches',
      todoLinks: organisation,
      color: '#123456'
    },
  ]
};

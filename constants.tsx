
import React from 'react';
import { Question } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, text: 'Haben Sie ein Inspektionsprotokoll der letzten 12 Monate (inkl. Fotos)?' },
  { id: 2, text: 'Gibt es einen festen Kontrollzyklus (z.B. nach SIA-469-Logik)?' },
  { id: 3, text: 'Ist die Vogelabwehr nachweislich lückenfrei (keine Öffnungen über ca. 4 cm)?' },
  { id: 4, text: 'Werden Dachrinnen präventiv mindestens 1× jährlich geprüft und gereinigt?' },
  { id: 5, text: 'Fordern Sie Dienstleister-Nachweise ein (z.B. EN 16636 / Verbandsstandards)?' },
  { id: 6, text: 'Gibt es definierte Reaktions- und Eskalationswege für Mieterreklamationen?' },
];

export const TRUST_PARTNERS = [
  'SBB', 'ETH Zürich', 'Kanton Zürich', 'Livit', 'Hälg',
  'CEPA / EN 16636', 'Verband Schweizerischer Schädlingsbekämpfer'
];

export const REGIONS = ['Zürich', 'Aargau', 'Zentralschweiz', 'Ostschweiz'];

export const FAQS = [
  {
    q: 'Was genau sagt das Ampel-Resultat aus?',
    a: 'Es zeigt, wie belastbar Ihr Sorgfaltsnachweis ist: Protokolle, Zyklen, Standards und Reaktionswege.'
  },
  {
    q: 'Ist der Risiko-Check anonym?',
    a: 'Ja. Erst wenn Sie das Playbook wollen oder ein Debrief sinnvoll ist, geben Sie optional Kontaktdaten an.'
  },
  {
    q: 'Für welche Objekte ist das geeignet?',
    a: 'Für Wohn- und Gewerbeobjekte, insbesondere bei wiederkehrenden Hotspots und erhöhtem Stakeholder-Druck.'
  },
  {
    q: 'Arbeiten Sie mit Standards?',
    a: 'Ja. Wir orientieren uns an praxistauglichen Standards (z.B. SIA-Logik, EN 16636) und setzen CH-konforme Verfahren um.'
  }
];

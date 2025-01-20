import React from 'react';
import { Navigation } from '../components/nav';

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-3xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Sobre Mim
          </h2>
          <p className="mt-4 text-zinc-400 leading-8">
            Olá! Sou um desenvolvedor com experiência em diversas linguagens de programação e ferramentas. Atualmente cursando Ciência da Computação, com previsão de conclusão em janeiro de 2026.
            Tenho habilidades sólidas em desenvolvimento back-end, com foco em .NET, NextJs e interesse em tecnologias de ponta.
          </p>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-2xl mx-auto lg:mx-0 space-y-4">
          <h3 className="text-2xl font-semibold text-zinc-100">Minhas Habilidades</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>Desenvolvimento back-end</li>
            <li>Conhecimento em Nextjs, C#, .NET, Python, Reactjs, TypeScript e SQL</li>
            <li>Monitoramento de banco de dados</li>
            <li>Monitoramento de redes e configuração de PDVs</li>
            <li>Criação de dashboards com Power BI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

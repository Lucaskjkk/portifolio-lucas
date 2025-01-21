import React from 'react';
import { Card } from '../components/card';
import { Navigation } from '../components/nav';
import Link from 'next/link';
import { link } from 'node:fs';


const projects = [
  {
    slug: 'https://sistema-erp-frontend-pba5q.ondigitalocean.app/signin',
    title: 'Micro ERP',
    date: '2025-01-15',
    description: 'Sistema criado para facilitar o controle de empresas em geral...    Login: test@test.com  ||  Senha: 123',
    views: 143,
    language: 'Reactjs, TypeScript, Python',
    database: 'MySql',
  },
  {
    slug: 'https://github.com/Lucaskjkk/ModuloAPI',
    title: 'API CRUD Open-Source  ',
    date: '2022-06-12',
    description: 'API desernvolvida para criação, leitura, atualização e exclusão de usuários...',
    views: 121,
    language: 'ASP.NET',
    database: 'MySql',
  },
  {
    slug: 'https://github.com/Lucaskjkk/sistema-ocorrencias',
    title: 'Sistema de ocorrências diárias',
    date: '2023-09-20',
    description: 'Sistema desenvolvido para anotar ocorrências diárias com leitura de dados através de gráficos, utilizando Flask.',
    views: 90,
    language: 'Python',
    database: 'SqlServer',
  },
  {
    slug: 'https://github.com/Lucaskjkk/api-cep',
    title: 'API de localização de CEP',
    date: '2024-09-15',
    description: 'Sistema para localizar endereço de maneira prática',
    views: 150,
    language: '.NET 8.0',
    database: 'Mysql',
  },
  {
    slug: 'https://github.com/Lucaskjkk/sistema_estacionamento',
    title: 'Sistema de Estacionamento (Back-End)',
    date: '2024-10-30',
    description: 'Sistema criado para controle de entrada e saida de carros',
    views: 143,
    language: 'C# (.NET)',
    database: 'MySql',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos projetos são de trabalho e outros pessoais.<br></br>
           <b>Obs: Todos os projetos estão finalizados e integrados a bancos de dados gerenciados por mim.</b>
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <Link href={`${project.slug}`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={new Date(project.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: 'medium',
                        }).format(new Date(project.date))}
                      </time>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <span className="w-4 h-4">👁️</span> {/* Ícone de views */}
                      {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                        project.views
                      )}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">
                    <strong>Linguagem:</strong> {project.language}
                  </p>
                  <p className="text-sm text-zinc-400">
                    <strong>Banco de Dados:</strong> {project.database}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">

                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

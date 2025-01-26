import React from 'react';
import { Layout } from '@/components/ui/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectCard = ({ title, description, technologies, link }) => (
  <Card className="w-full max-w-md mb-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map(tech => (
          <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 inline-block text-primary hover:underline"
        >
          View Project
        </a>
      )}
    </CardContent>
  </Card>
);

const IndexPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web application that...",
      technologies: ["React", "Gatsby", "TypeScript"],
      link: "https://github.com/yourusername/project1"
    },
    // Add more projects
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Name</h1>
        <p className="mb-8">Brief professional introduction...</p>
        
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
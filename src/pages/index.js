import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button 
} from '@mui/material';

const ProjectCard = ({ title, description, technologies, link }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {technologies.map(tech => (
          <Grid item key={tech}>
            <Typography 
              variant="caption" 
              sx={{ 
                bgcolor: 'primary.light', 
                color: 'primary.contrastText',
                px: 1, 
                py: 0.5, 
                borderRadius: 1 
              }}
            >
              {tech}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </CardContent>
    <CardActions sx={{ mt: 'auto' }}>
      {link && (
        <Button 
          size="small" 
          href={link} 
          target="_blank"
        >
          View Project
        </Button>
      )}
    </CardActions>
  </Card>
);

const IndexPage = () => {
  const projects = [
    {
      title: "Stella",
      description: "A django based AI chatbot from scratch (no LLM)",
      technologies: ["Python", "Django", "Neo4j", "prolog", "aiml"],
      link: "https://github.com/pmchohan/stella"
    },
    // Add more projects
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Abdullah Faisal
      </Typography>
      <Typography variant="body1" paragraph>
        Another Tech Enthusiast
      </Typography>
      
      <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2 }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map(project => (
          <Grid item xs={12} sm={6} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default IndexPage;
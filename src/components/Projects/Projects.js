import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
<Section nopadding id='projects'>
   <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image, title,description,tags,source,visit})=> (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
              <CardInfo>
                {description}
              </CardInfo>
              <br />
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                <ExternalLinks href={visit}>Visit</ExternalLinks>
              </UtilityList>
            </TitleContent>

          </BlogCard>
      ))}
    </GridContainer>

</Section>
);

export default Projects;
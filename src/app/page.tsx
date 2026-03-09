import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO SECTION */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">

          {/* Headline */}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="12">
            <Heading wrap="balance" variant="display-strong-m">
              {home.headline}
            </Heading>
          </RevealFx>

          {/* Subline */}
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>

          {/* BUTTONS */}
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Row gap="16" wrap>

              <Button
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                About Me
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="m"
                weight="default"
                data-border="rounded"
              >
                Contact
              </Button>

              <Button
                href="/resume/Abishake-Resume.pdf"
                variant="secondary"
                size="m"
                weight="strong"
                target="_blank"
              >
                Download Resume
              </Button>

              

            </Row>
          </RevealFx>

        </Column>
      </Column>

      {/* FEATURED PROJECT */}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* MORE PROJECTS */}
      <Projects range={[2]} />

    </Column>
  );
}
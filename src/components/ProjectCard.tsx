"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  github?: string;
  live?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  github,
  live,
}) => {
  return (
    <Column fillWidth gap="m">

      {/* PROJECT IMAGE */}
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        radius="s"
        items={(images?.length ? images : []).map((image) => ({
          slide: image,
          alt: title,
        }))}
      />

      {/* PROJECT CONTENT */}
      <Flex
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
        direction="column"
      >

        {/* TITLE */}
        {title && (
          <Heading
            as="h2"
            variant="heading-strong-xl"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Heading>
        )}

        {/* DESCRIPTION + LINKS */}
        <Column gap="16">

          {avatars?.length > 0 && (
            <AvatarGroup avatars={avatars} size="m" reverse />
          )}

          {description?.trim() && (
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
            >
              {description}
            </Text>
          )}

          <Flex gap="20" wrap align="center">

            {content?.trim() && (
              <SmartLink
                suffixIcon="arrowRight"
                style={{ width: "fit-content" }}
                href={href}
              >
                <Text variant="body-default-s">
                  Details Of The Project
                </Text>
              </SmartLink>
            )}

            {github && (
              <SmartLink
                suffixIcon="github"
                style={{ width: "fit-content" }}
                href={github}
              >
                <Text variant="body-default-s">
                  GitHub
                </Text>
              </SmartLink>
            )}

            {live && (
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                style={{ width: "fit-content" }}
                href={live}
              >
                <Text variant="body-default-s">
                  Live Demo
                </Text>
              </SmartLink>
            )}

          </Flex>

        </Column>

      </Flex>
    </Column>
  );
};
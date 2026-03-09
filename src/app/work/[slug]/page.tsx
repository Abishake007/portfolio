import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Flex,
  Button,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;

  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image ||
      `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;

  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="s" horizontal="center" gap="xl">

      {/* SEO Schema */}
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>

        {post.metadata.publishedAt && (
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        )}

        <Heading variant="display-strong-l" align="center">
          {post.metadata.title}
        </Heading>
      </Column>

      {/* Team (Optional) */}
      {post.metadata.team && post.metadata.team.length > 0 && (
        <Row marginBottom="32" horizontal="center">
          <Row gap="16" vertical="center">
            <AvatarGroup reverse avatars={avatars} size="s" />
            <Text variant="label-default-m" onBackground="brand-weak">
              {post.metadata.team.map((member, idx) => (
                <span key={idx}>
                  {idx > 0 && (
                    <Text as="span" onBackground="neutral-weak">
                      ,{" "}
                    </Text>
                  )}
                  <SmartLink href={member.linkedIn}>
                    {member.name}
                  </SmartLink>
                </span>
              ))}
            </Text>
          </Row>
        </Row>
      )}

      {/* Cover Image */}
      {post.metadata.cover && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="l"
          alt="project image"
          src={String(post.metadata.cover)}
        />
      )}

      {/* Main Content */}
      <Column as="article" maxWidth="s" style={{ margin: "0 auto" }}>
        <CustomMDX source={post.content} />

        {/* Project Buttons */}
        {(post.metadata.github || post.metadata.live) && (
          <Flex gap="16" marginTop="32" wrap horizontal="center">

            {post.metadata.github && (
              <Button
                href={post.metadata.github}
                target="_blank"
                variant="secondary"
                arrowIcon
              >
                View GitHub
              </Button>
            )}

            {post.metadata.live && (
              <Button
                href={post.metadata.live}
                target="_blank"
                variant="primary"
                arrowIcon
              >
                Live Demo
              </Button>
            )}

          </Flex>
        )}
      </Column>

      <ScrollToHash />
    </Column>
  );
}
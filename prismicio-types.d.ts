import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

/**
 * Item in *About → Headline lines*
 */
export interface AboutDocumentDataHeadlineItem {
	/**
	 * Line field in *About → Headline lines*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Lines display together on smaller screens
	 * - **API ID Path**: about.headline[].line
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	line: prismic.KeyTextField;
}

/**
 * Item in *About → Professional values*
 */
export interface AboutDocumentDataValuesItem {
	/**
	 * Icon field in *About → Professional values*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.values[].icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"people" | "curiosity" | "detail">;
	
	/**
	 * Title field in *About → Professional values*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.values[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *About → Professional values*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.values[].description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
}

/**
 * Content for About documents
 */
interface AboutDocumentData {
	/**
	 * Eyebrow field in *About*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.eyebrow
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	eyebrow: prismic.KeyTextField;
	
	/**
	 * Headline lines field in *About*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.headline[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	headline: prismic.GroupField<Simplify<AboutDocumentDataHeadlineItem>>;
	
	/**
	 * Professional introduction field in *About*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.introduction
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	introduction: prismic.RichTextField;
	
	/**
	 * Portrait field in *About*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.portrait
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	portrait: prismic.ImageField<never>;
	
	/**
	 * Resume action label field in *About*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.resume_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	resume_label: prismic.KeyTextField;
	
	/**
	 * Professional values field in *About*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.values[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	values: prismic.GroupField<Simplify<AboutDocumentDataValuesItem>>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *Experience → Primary skills*
 */
export interface ExperienceDocumentDataSkillsItem {
	/**
	 * Skill field in *Experience → Primary skills*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.skills[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
}

/**
 * Item in *Experience → Additional skills*
 */
export interface ExperienceDocumentDataAdditionalSkillsItem {
	/**
	 * Skill field in *Experience → Additional skills*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.additional_skills[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Experience documents
 */
interface ExperienceDocumentData {
	/**
	 * Organization field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.company
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	company: prismic.KeyTextField;
	
	/**
	 * Optional short name field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.company_short
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	company_short: prismic.KeyTextField;
	
	/**
	 * Role field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.role
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	role: prismic.KeyTextField;
	
	/**
	 * Location field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.location
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	location: prismic.KeyTextField;
	
	/**
	 * Start month (YYYY-MM) field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: 2025-04
	 * - **API ID Path**: experience.start_month
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	start_month: prismic.KeyTextField;
	
	/**
	 * End month (YYYY-MM) field in *Experience*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Leave empty for a current role
	 * - **API ID Path**: experience.end_month
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	end_month: prismic.KeyTextField;
	
	/**
	 * Current role field in *Experience*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: experience.current
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	current: prismic.BooleanField;
	
	/**
	 * Role summary field in *Experience*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.summary
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	summary: prismic.RichTextField;
	
	/**
	 * Responsibilities and achievements field in *Experience*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.impact
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	impact: prismic.RichTextField;
	
	/**
	 * Primary skills field in *Experience*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.skills[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	skills: prismic.GroupField<Simplify<ExperienceDocumentDataSkillsItem>>;
	
	/**
	 * Additional skills field in *Experience*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: experience.additional_skills[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	additional_skills: prismic.GroupField<Simplify<ExperienceDocumentDataAdditionalSkillsItem>>;
}

/**
 * Experience document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ExperienceDocumentData>, "experience", Lang>;

type HomepageDocumentDataSlicesSlice = HeroSlice | ResourceLinksSlice | CardGridSlice

/**
 * Item in *Homepage → Core strengths*
 */
export interface HomepageDocumentDataStrengthsItem {
	/**
	 * Icon field in *Homepage → Core strengths*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.strengths[].icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"architecture" | "accessibility" | "systems" | "performance" | "collaboration">;
	
	/**
	 * Label field in *Homepage → Core strengths*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.strengths[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
	
	/**
	 * Optional second line field in *Homepage → Core strengths*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.strengths[].detail
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	detail: prismic.KeyTextField;
}

/**
 * Item in *Homepage → Workflow steps*
 */
export interface HomepageDocumentDataWorkflowItem {
	/**
	 * Icon field in *Homepage → Workflow steps*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow[].icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"collaborate" | "implement" | "optimize" | "deliver">;
	
	/**
	 * Title field in *Homepage → Workflow steps*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Homepage → Workflow steps*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow[].description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
}

/**
 * Item in *Homepage → Technologies and practices*
 */
export interface HomepageDocumentDataTechnologiesItem {
	/**
	 * Icon field in *Homepage → Technologies and practices*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.technologies[].icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"react" | "typescript" | "next" | "storybook" | "accessibility" | "design" | "git">;
	
	/**
	 * Label field in *Homepage → Technologies and practices*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.technologies[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
}

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
	/**
	 * Slice Zone field in *Homepage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;/**
	 * Headline field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.hero_headline
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	hero_headline: prismic.KeyTextField;
	
	/**
	 * Introduction field in *Homepage*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.hero_description
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	hero_description: prismic.RichTextField;
	
	/**
	 * Decorative hero illustration field in *Homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.hero_image
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	hero_image: prismic.ImageField<never>;
	
	/**
	 * Primary action label field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.primary_label
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	primary_label: prismic.KeyTextField;
	
	/**
	 * Primary action destination field in *Homepage*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.primary_destination
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	primary_destination: prismic.SelectField<"Case studies" | "Experience" | "About" | "Contact">;
	
	/**
	 * Secondary action label field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.secondary_label
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	secondary_label: prismic.KeyTextField;
	
	/**
	 * Secondary action destination field in *Homepage*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.secondary_destination
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	secondary_destination: prismic.SelectField<"Case studies" | "Experience" | "About" | "Contact">;
	
	/**
	 * Core strengths field in *Homepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.strengths[]
	 * - **Tab**: Hero
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	strengths: prismic.GroupField<Simplify<HomepageDocumentDataStrengthsItem>>;/**
	 * Case studies heading field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.projects_heading
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	projects_heading: prismic.KeyTextField;
	
	/**
	 * Experience heading field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.experience_heading
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	experience_heading: prismic.KeyTextField;
	
	/**
	 * How I work heading field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow_heading
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	workflow_heading: prismic.KeyTextField;
	
	/**
	 * How I work introduction field in *Homepage*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow_intro
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	workflow_intro: prismic.RichTextField;
	
	/**
	 * Workflow steps field in *Homepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.workflow[]
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	workflow: prismic.GroupField<Simplify<HomepageDocumentDataWorkflowItem>>;
	
	/**
	 * Technologies heading field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.technologies_heading
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	technologies_heading: prismic.KeyTextField;
	
	/**
	 * Technologies and practices field in *Homepage*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.technologies[]
	 * - **Tab**: Sections
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	technologies: prismic.GroupField<Simplify<HomepageDocumentDataTechnologiesItem>>;/**
	 * Eyebrow field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.contact_eyebrow
	 * - **Tab**: Contact
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_eyebrow: prismic.KeyTextField;
	
	/**
	 * Headline field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.contact_heading
	 * - **Tab**: Contact
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	contact_heading: prismic.KeyTextField;
	
	/**
	 * Contact introduction field in *Homepage*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.contact_description
	 * - **Tab**: Contact
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	contact_description: prismic.RichTextField;/**
	 * Meta Title field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: homepage.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: homepage.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Optional homepage social image field in *Homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.social_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	social_image: prismic.ImageField<never>;/**
	 * Copyright Text field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_copyright_text
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	footer_copyright_text: prismic.KeyTextField;
	
	/**
	 * Cookies Link field in *Homepage*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_cookies_link
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	footer_cookies_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * Social Links field in *Homepage*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.footer_social_links
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	footer_social_links: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "X" | "YouTube" | "GitHub" | "LinkedIn">>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;

/**
 * Item in *Project → Technology and practice tags*
 */
export interface ProjectDocumentDataTagsItem {
	/**
	 * Tag field in *Project → Technology and practice tags*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.tags[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
}

/**
 * Item in *Project → Resources*
 */
export interface ProjectDocumentDataLinksItem {
	/**
	 * Link label field in *Project → Resources*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.links[].label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	label: prismic.KeyTextField;
	
	/**
	 * Resource URL field in *Project → Resources*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.links[].link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * Open in a new tab field in *Project → Resources*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: project.links[].external
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	external: prismic.BooleanField;
}

/**
 * Item in *Project → Ordered case study sections*
 */
export interface ProjectDocumentDataSectionsItem {
	/**
	 * Stable section ID field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Lowercase with hyphens. Preserve existing IDs.
	 * - **API ID Path**: project.sections[].section_id
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	section_id: prismic.KeyTextField;
	
	/**
	 * Optional parent path field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Example: process/navigation. Leave blank for top-level sections.
	 * - **API ID Path**: project.sections[].parent_path
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	parent_path: prismic.KeyTextField;
	
	/**
	 * Heading field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Optional icon field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"target" | "clipboard" | "search" | "scale" | "smartphone" | "layers" | "accessibility" | "lightbulb" | "chart" | "star" | "laptop">;
	
	/**
	 * Paragraphs field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * Bullet points field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].bullets
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	bullets: prismic.RichTextField;
	
	/**
	 * Decision field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].decision
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	decision: prismic.RichTextField;
	
	/**
	 * Trade-off field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].trade_off
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	trade_off: prismic.RichTextField;
	
	/**
	 * Optional figure field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Related case study label field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].related_label
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	related_label: prismic.KeyTextField;
	
	/**
	 * Related project field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].related_project
	 * - **Documentation**: https://prismic.io/docs/fields/content-relationship
	 */
	related_project: prismic.ContentRelationshipField<"project">;
	
	/**
	 * Target fragment without # field in *Project → Ordered case study sections*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[].related_fragment
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	related_fragment: prismic.KeyTextField;
}

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
	/**
	 * Project title field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.title
	 * - **Tab**: Overview
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Short introduction field in *Project*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.subtitle
	 * - **Tab**: Overview
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	subtitle: prismic.RichTextField;
	
	/**
	 * Technology and practice tags field in *Project*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.tags[]
	 * - **Tab**: Overview
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	tags: prismic.GroupField<Simplify<ProjectDocumentDataTagsItem>>;
	
	/**
	 * Hero and card image field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.image
	 * - **Tab**: Overview
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Resources field in *Project*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.links[]
	 * - **Tab**: Overview
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	links: prismic.GroupField<Simplify<ProjectDocumentDataLinksItem>>;/**
	 * Role field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.role
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	role: prismic.KeyTextField;
	
	/**
	 * Project type field in *Project*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.project_type
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	project_type: prismic.SelectField<"Personal" | "Academic" | "Assessment" | "Client" | "Professional">;
	
	/**
	 * Duration field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.duration
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	duration: prismic.KeyTextField;
	
	/**
	 * Year field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.year
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	year: prismic.KeyTextField;
	
	/**
	 * Context role field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.summary_role
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	summary_role: prismic.KeyTextField;
	
	/**
	 * Focus field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.focus
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	focus: prismic.KeyTextField;
	
	/**
	 * Outcome field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.outcome
	 * - **Tab**: Facts
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	outcome: prismic.KeyTextField;/**
	 * Show in home listing field in *Project*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: project.show_card
	 * - **Tab**: Listing
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	show_card: prismic.BooleanField;
	
	/**
	 * Feature in home listing field in *Project*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: project.featured
	 * - **Tab**: Listing
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	featured: prismic.BooleanField;
	
	/**
	 * Display order (lowest first) field in *Project*
	 *
	 * - **Field Type**: Number
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.display_order
	 * - **Tab**: Listing
	 * - **Documentation**: https://prismic.io/docs/fields/number
	 */
	display_order: prismic.NumberField;
	
	/**
	 * Optional card introduction field in *Project*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.pitch
	 * - **Tab**: Listing
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	pitch: prismic.RichTextField;/**
	 * Ordered case study sections field in *Project*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.sections[]
	 * - **Tab**: Case study
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	sections: prismic.GroupField<Simplify<ProjectDocumentDataSectionsItem>>;/**
	 * Optional SEO title override field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.meta_title
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Optional SEO description field in *Project*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.meta_description
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Optional social image override field in *Project*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: project.social_image
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	social_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;

/**
 * Content for Site Settings documents
 */
interface SiteSettingsDocumentData {
	/**
	 * Public display name field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.display_name
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	display_name: prismic.KeyTextField;
	
	/**
	 * Professional title field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.professional_title
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	professional_title: prismic.KeyTextField;
	
	/**
	 * Public contact email field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.email
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	email: prismic.KeyTextField;
	
	/**
	 * LinkedIn profile field in *Site Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.linkedin
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	linkedin: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * GitHub profile field in *Site Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.github
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	github: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * Public resume URL field in *Site Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.resume
	 * - **Tab**: Identity
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	resume: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;/**
	 * Home link field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.nav_home
	 * - **Tab**: Navigation
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	nav_home: prismic.KeyTextField;
	
	/**
	 * Case studies link field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.nav_projects
	 * - **Tab**: Navigation
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	nav_projects: prismic.KeyTextField;
	
	/**
	 * Experience link field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.nav_experience
	 * - **Tab**: Navigation
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	nav_experience: prismic.KeyTextField;
	
	/**
	 * About link field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.nav_about
	 * - **Tab**: Navigation
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	nav_about: prismic.KeyTextField;
	
	/**
	 * Contact link field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.nav_contact
	 * - **Tab**: Navigation
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	nav_contact: prismic.KeyTextField;/**
	 * Professional summary field in *Site Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.footer_summary
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	footer_summary: prismic.RichTextField;
	
	/**
	 * Navigation heading field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.footer_explore
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	footer_explore: prismic.KeyTextField;
	
	/**
	 * Contact heading field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.footer_contact
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	footer_contact: prismic.KeyTextField;
	
	/**
	 * Contact invitation field in *Site Settings*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.footer_invitation
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	footer_invitation: prismic.RichTextField;
	
	/**
	 * Contact action label field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.footer_action
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	footer_action: prismic.KeyTextField;
	
	/**
	 * Copyright pattern field in *Site Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: © {year} {name}. All rights reserved.
	 * - **API ID Path**: site_settings.copyright
	 * - **Tab**: Footer
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	copyright: prismic.KeyTextField;/**
	 * Default social image field in *Site Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: site_settings.social_image
	 * - **Tab**: SEO
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	social_image: prismic.ImageField<never>;
}

/**
 * Site Settings document from Prismic
 *
 * - **API ID**: `site_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteSettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<SiteSettingsDocumentData>, "site_settings", Lang>;

export type AllDocumentTypes = AboutDocument | ExperienceDocument | HomepageDocument | ProjectDocument | SiteSettingsDocument;

/**
 * Item in *Card Grid → Default → Primary → Cards*
 */
export interface CardGridSliceDefaultPrimaryCardsItem {
	/**
	 * Title field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
	
	/**
	 * Image field in *Card Grid → Default → Primary → Cards*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[].image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Card Grid → Default → Primary*
 */
export interface CardGridSliceDefaultPrimary {
	/**
	 * Cards field in *Card Grid → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: card_grid.default.primary.cards[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	cards: prismic.GroupField<Simplify<CardGridSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for Card Grid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CardGridSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CardGridSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Card Grid*
 */
type CardGridSliceVariation = CardGridSliceDefault

/**
 * Card Grid Shared Slice
 *
 * - **API ID**: `card_grid`
 * - **Description**: *None*
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CardGridSlice = prismic.SharedSlice<"card_grid", CardGridSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Headline field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.headline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	headline: prismic.RichTextField;
	
	/**
	 * Description field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
	
	/**
	 * Background Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.background_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * Interface Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.interface_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	interface_image: prismic.ImageField<never>;
	
	/**
	 * Logo field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.logo
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	logo: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default variation
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero section with text, image, and buttons
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Resource Links → Default → Primary → Resources*
 */
export interface ResourceLinksSliceDefaultPrimaryResourcesItem {
	/**
	 * Title field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].title
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Description field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].description
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	description: prismic.KeyTextField;
	
	/**
	 * Link field in *Resource Links → Default → Primary → Resources*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[].link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Primary content in *Resource Links → Default → Primary*
 */
export interface ResourceLinksSliceDefaultPrimary {
	/**
	 * Resources field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.resources[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	resources: prismic.GroupField<Simplify<ResourceLinksSliceDefaultPrimaryResourcesItem>>;
	
	/**
	 * Call to Action Heading field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.cta_heading
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	cta_heading: prismic.KeyTextField;
	
	/**
	 * Call to Action Link field in *Resource Links → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: resource_links.default.primary.cta_link
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	cta_link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Resource Links Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ResourceLinksSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ResourceLinksSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Resource Links*
 */
type ResourceLinksSliceVariation = ResourceLinksSliceDefault

/**
 * Resource Links Shared Slice
 *
 * - **API ID**: `resource_links`
 * - **Description**: *None*
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ResourceLinksSlice = prismic.SharedSlice<"resource_links", ResourceLinksSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			AboutDocument,
			AboutDocumentData,
			AboutDocumentDataHeadlineItem,
			AboutDocumentDataValuesItem,
			ExperienceDocument,
			ExperienceDocumentData,
			ExperienceDocumentDataSkillsItem,
			ExperienceDocumentDataAdditionalSkillsItem,
			HomepageDocument,
			HomepageDocumentData,
			HomepageDocumentDataSlicesSlice,
			HomepageDocumentDataStrengthsItem,
			HomepageDocumentDataWorkflowItem,
			HomepageDocumentDataTechnologiesItem,
			ProjectDocument,
			ProjectDocumentData,
			ProjectDocumentDataTagsItem,
			ProjectDocumentDataLinksItem,
			ProjectDocumentDataSectionsItem,
			SiteSettingsDocument,
			SiteSettingsDocumentData,
			AllDocumentTypes,
			CardGridSlice,
			CardGridSliceDefaultPrimaryCardsItem,
			CardGridSliceDefaultPrimary,
			CardGridSliceVariation,
			CardGridSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ResourceLinksSlice,
			ResourceLinksSliceDefaultPrimaryResourcesItem,
			ResourceLinksSliceDefaultPrimary,
			ResourceLinksSliceVariation,
			ResourceLinksSliceDefault
		}
	}
}
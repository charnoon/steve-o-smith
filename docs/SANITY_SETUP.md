# Sanity CMS Setup

## 1. Create a Sanity project

Run in a separate folder:

```bash
npm create sanity@latest
```

Follow the prompts to create a project. Note your **Project ID** and **Dataset** (usually `production`).

## 2. Add environment variables

Create `.env.local` in this project:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Collection schema (for Sanity Studio)

In your Sanity Studio, add a schema for the collection document:

```javascript
// schemas/collection.js
export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gridImages',
      title: 'Grid Images (4up)',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [{
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }],
      }],
      validation: (Rule) => Rule.max(4).min(4).error('Exactly 4 images for the 4up grid'),
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Untitled Collection' };
    },
  },
};
```

## 4. Create METROPOLIS collection

1. Open your Sanity Studio
2. Create a new document with type "Collection"
3. Set title: **METROPOLIS**
4. Set slug: **metropolis**
5. Add exactly 4 images to Grid Images

## 5. CORS

Add your site URL in [sanity.io/manage](https://sanity.io/manage) → API → CORS Origins (e.g. `http://localhost:3000` for dev).

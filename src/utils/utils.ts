import sanitizeHtml from 'sanitize-html'

export const sanitizeAllHtmlContent = (content = '') =>
  sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'a',
      'ul',
      'li',
      'ol',
      'strong',
      'em',
      'h2',
      'p',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt', 'title', 'width', 'height'],
      a: ['href', 'title', 'style', 'class', 'target', 'rel'],
      h2: ['class'],
      p: ['class'],
      li: ['class'],
      ol: ['start'],
    },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: 'a',
        attribs: {
          ...attribs,
          class: `${attribs.class ? `${attribs.class} ` : ''}underline text-cyan-700`,
          target: attribs.target || '_blank',
          rel: attribs.rel || 'noopener noreferrer',
        },
      }),
      p: (tagName, attribs) => ({
        tagName: 'p',
        attribs: {
          ...attribs,
          class: `${
            attribs.class ? `${attribs.class} ` : ''
          }text-base/7 text-gray-700 mb-6`,
        },
      }),
      h2: (tagName, attribs) => ({
        tagName: 'h2',
        attribs: {
          ...attribs,
          class: `${
            attribs.class ? `${attribs.class} ` : ''
          }mt-16 text-xl font-bold tracking-tight text-gray-900 mb-6`,
        },
      }),
      h3: (tagName, attribs) => ({
        tagName: 'h3',
        attribs: {
          ...attribs,
          class: `${
            attribs.class ? `${attribs.class} ` : ''
          }text-lg/8 font-semibold text-gray-900 mb-4`,
        },
      }),
    },
  })

export const getImageDisplaySize = (width?: number, height?: number) => {
  if (!width || !height) {
    // fallback to square if dimensions are missing
    return { width: 100, height: 100 }
  }
  // Rectangle: width is at least 1.2x height
  if (width / height >= 1.2) {
    return { width: 150, height: 100 }
  }
  // Otherwise, use square
  return { width: 100, height: 100 }
}

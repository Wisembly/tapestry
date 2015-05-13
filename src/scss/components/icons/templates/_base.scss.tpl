@font-face {
  font-family: "<%= fontName %>";
  src: url('#{$f-path}/<%= fontName %>.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.<%= className %>:before {
  display: inline-block;
  vertical-align: middle;
  font-family: "<%= fontName %>";
  font-size: $base-fz;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  text-transform: none;
  text-decoration: inherit;
  color: inherit;
  speak: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

<% _.each(glyphs, function(glyph) { %>.<%= className %>-<%= glyph.name %>:before { content: "\<%= glyph.codepoint.toString(16) %>" }
<% }); %>

@font-face {
  font-family: "<%= fontName %>";
  src: url("#{$f-path}/<%= fontName %>.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.<%= className %>:before {
  display: inline-block;
  font-family: "<%= fontName %>";
  font-size: $base-fz;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  text-transform: none;
  text-decoration: inherit;
  vertical-align: middle;
  color: inherit;
  speak: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

<% _.each(glyphs, function(glyph) { %>.<%= className %>-<%= glyph.name %>:before {
  content: "\<%= glyph.codepoint.toString(16) %>";
}

<% }); %>

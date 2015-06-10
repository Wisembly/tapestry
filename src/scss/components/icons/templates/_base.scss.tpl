@font-face {
  font-family: "<%= fontName %>";
  src: url("#{$f-path}/<%= fontName %>.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

%<%= className %> {
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

.<%= className %> {
  @extend %<%= className %>;
}

.<%= className %>--s {
  font-size: $base-fz * .8;
}

<% _.each(glyphs, function(glyph) { %>
%<%= className %>--<%= glyph.name %> {
  content: "\<%= glyph.codepoint.toString(16) %>";
}

.<%= className %>--<%= glyph.name %>:before {
  @extend %<%= className %>--<%= glyph.name %>;
}
<% }); %>

# Icons

## Generic syntax

## List

<ul class="u-cf"><% _.each(glyphs, function(glyph) { %>
  <li class="Card">
    <span class="<%= className %> <%= className %>-<%= glyph.name %>"></span>
    <span class="glyph-name"><%= glyph.name %></span>
    <span class="glyph-codepoint"><%= glyph.codepoint.toString(16).toUpperCase() %></span>
  </li><% }); %>
</ul>

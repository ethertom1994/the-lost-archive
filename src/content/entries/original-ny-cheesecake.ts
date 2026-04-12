import type { Entry } from '../../types';

export const originalNyCheesecake: Entry = {
  slug: 'original-ny-cheesecake',
  name: 'Original New York Cheesecake',
  tagline: 'The original recipe used pot cheese and bacterial cultures that no longer exist commercially. The "New York cheesecake" you eat today is a different dessert.',
  category: 'food',
  subcategory: 'Lost Recipes',
  lastKnownYear: 1950,
  lastKnownLocation: 'Jewish delicatessens of Lower Manhattan, New York City',
  coordinates: [40.72, -73.99],
  region: 'North America',
  status: 'extinct',
  cause: 'Standardization of commercial dairy cultures and disappearance of traditional pot cheese production',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Cheese That Made It

The New York cheesecake that Arnold Reuben is credited with popularizing in the 1920s, and that Lindy's made famous in the 1940s, was not made with the cream cheese you buy today. The original recipe called for pot cheese, a fresh, dry curd cheese with a crumbly, slightly grainy texture and a tangy flavor quite different from the smooth, mild cream cheese that replaced it.

Pot cheese was a staple of Eastern European Jewish cooking. It was made by allowing raw or pasteurized milk to acidify naturally with whatever bacterial cultures were present in the dairy, then draining the whey through cloth. Every dairy produced a slightly different version, because every dairy had different bacterial populations. The pot cheese from a dairy on Delancey Street tasted different from the pot cheese from a dairy in Williamsburg.

This mattered for cheesecake. The specific tanginess, the grain of the curd, and the way the cheese behaved when baked all depended on the cultures in the cheese. The cheesecake from Lindy's was not just a recipe. It was an ecosystem.

## The Standardization

In the mid-twentieth century, the American dairy industry consolidated and standardized. Small urban dairies that made pot cheese from local milk with local cultures were replaced by large operations using standardized bacterial cultures, pasteurized milk, and industrial processes. Pot cheese production declined sharply. Philadelphia-brand cream cheese, invented in 1872 but mass-produced from the 1930s onward, became the default.

When bakers switched from pot cheese to cream cheese, the cheesecake changed. Cream cheese is smoother, denser, and milder. The resulting cake is creamier and more uniform, but it lacks the complex tang and the slightly rustic texture of the original. Most New Yorkers born after 1960 have never tasted the earlier version.

## The Culture Problem

Even if you could find traditional pot cheese today, you couldn't replicate the original cheesecake. The specific bacterial strains that populated early twentieth-century New York dairies no longer exist in those combinations. Dairy science has advanced enormously, but in the direction of control and consistency, not diversity. The wild, variable, local character of pre-industrial dairy is precisely what standardization eliminated.

A handful of artisanal cheesemakers produce something called pot cheese today, but it's made with selected cultures in controlled conditions. It's a different product with the same name. The cheesecake it produces is good. It is not the same.

## A Name Without a Referent

"New York cheesecake" persists as a category on every diner menu and in every bakery case in the city. It refers to a cream cheese cake on a graham cracker crust, dense and rich and sweet. It is delicious by any reasonable standard. But it is not the dessert that earned the name. The original New York cheesecake exists now only as a phrase, a set of flavors that the words no longer describe.`,
  quickFacts: {
    'Original Key Ingredient': 'Pot cheese (fresh curd cheese from local dairies)',
    'Popularized By': 'Arnold Reuben (1920s), Lindy\'s restaurant (1940s)',
    'Modern Substitute': 'Philadelphia cream cheese (mass-produced from 1930s)',
    'What Changed': 'Standardized dairy cultures replaced local bacterial ecosystems',
    'Why It Can\'t Return': 'The specific bacterial strains from early NYC dairies no longer exist',
    'Status': 'The name survives, but the recipe\'s foundation is gone',
  },
  connections: [
    { slug: 'passenger-pigeon-pie', relationship: 'Both are recipes where the essential ingredient has become unavailable, leaving only the instructions behind' },
    { slug: 'garum', relationship: 'Both depend on specific fermentation cultures that cannot be recreated from modern industrial ingredients' },
  ],
  sources: [
    { title: 'The Oxford Companion to American Food and Drink', author: 'Andrew F. Smith', year: 2007 },
    { title: 'Cheesecake: A History', author: 'Andrew F. Smith', year: 2017 },
    { title: 'The Art of Fermentation', author: 'Sandor Ellix Katz', year: 2012 },
  ],
};

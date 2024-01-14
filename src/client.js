import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId: 'wh5t2gdi',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
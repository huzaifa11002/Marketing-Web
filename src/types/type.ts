
interface Params {
    id: string;
}

interface Hero {
    shortTitle: string;
    longTitle: string;
    description: string;
    buttonText: string;
    heroImage: string;
}

interface Client {
    image: string;
}

interface Service {
    icon: string ;
    title: string;
    shortDescription?: string;
    image: string;

}

interface Portfolio {
    image: string,
    logo: string
}

interface Team {
    image: string,
    name: string,
    position: string,
    facebook: string,
    instagram: string
}

interface Choose{
    image:string,
    point1:string,
    point2:string,
    point3:string,
    point4:string,
    point5:string
}

interface Testimonial {
    name: string;
    image: string;
    review: string;
    country: string;
}

interface HappyClient {
    label: string;
    image: string;
    value: number;
}

interface About {
    image: string;
    shortDescription?: string;
    longDescription?: string;
}

interface Contact {
    image: string;
}
interface WeChat {
    userId: string;
    image: string;
}
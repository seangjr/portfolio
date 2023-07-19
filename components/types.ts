type Image = {
    url: string;
}

export type Work = {
    title: string;
    description: string;
    dataId: string;
    classId: string;
    slug: string;
    scope: string;
    category: string;
    dataBg: string;
    thumbnail: Image;
    details: {
        siteUrl: string,
        source: string,
        overview: string,
        mockupImageSp: Image,
        mockupImagePc: Image,
        mockupImageTab: Image,
        projectImageWide: Image,
        projectDetailsImage: Image,
        role: string,
        productionDate: string,
        productionDuration: string,
        languages: string,
        tools: string,
    }
};
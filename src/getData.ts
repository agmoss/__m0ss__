enum FileType {
    Image,
    Markdown,
}

const getFile = async (url: string, fileType: FileType) => {
    const response = await fetch(url);
    switch (fileType) {
        case FileType.Image:
            if (response.ok) {
                const data = await response.blob();
                const blob = new Blob([data], { type: "image/jpeg" });
                return blob;
            } else {
                throw new Error("error");
            }
        case FileType.Markdown:
            if (response.ok) {
                const data = await response.blob();
                const blob = new Blob([data], { type: "text/plain" });
                return blob;
            } else {
                throw new Error("error");
            }
    }
};

export const getText = async (url: string) => {
    try {
        const f = await getFile(url, FileType.Markdown);
        return await new Response(f).text();
    } catch {
        return "error";
    }
};

// TODO: Add error handling
export const getImgs = async (urls: string[]) => {
    const adder = async (item: string) => {
        return getFile(item, FileType.Image);
    };
    return Promise.all(urls.map(adder));
};
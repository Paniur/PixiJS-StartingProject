export class Tools{
    static massiveRequire(require) {
        const files = [];
        require.keys().forEach((key) => {
            files.push({
                key, data: require(key)
            });
        });
        return files;
     }
}
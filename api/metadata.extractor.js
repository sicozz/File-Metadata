export default class Metadata {
    static extract(file) {
        return {
            "name": file.originalname,
            "type": file.mimetype,
            "size": file.size
        }
    }
}

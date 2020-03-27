const connection = require('../database/connection');

module.exports = {
    async index(request, resonse){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return resonse.json(incidents);
    }
}
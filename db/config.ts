import { DataSource, DataSourceOptions } from "typeorm";



export const dbConfig: DataSourceOptions = {

    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "backup",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    extra: { insecureAuth: true },
    migrations: ["dist/**/migrations/*{.ts,.js}"]
}

const dataSource = new DataSource(dbConfig)
export default dataSource;
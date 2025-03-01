import { DataTypes } from 'sequelize';
import db from '../config/dbConnect.js';

const QRCode = db.define(
	'QRCode',
	{
		qrcode: {
			type: DataTypes.INTEGER,
            autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		nivel_acesso: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		tableName: 'qrcode'
	}
);

export default QRCode;

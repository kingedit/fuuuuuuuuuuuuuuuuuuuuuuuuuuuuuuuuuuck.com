// topic model

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('topic', {
        id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.BIGINT(20),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        examine: {
            type: DataTypes.STRING(10),
            allowNull:false,
            defaultValue: '0' // 0:审核中, 1: 通过 , -1 : 未通过
        },
        remark: {
            type: DataTypes.TEXT
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
};
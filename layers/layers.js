var wms_layers = [];


        var lyr_DarkVoyager_0 = new ol.layer.Tile({
            'title': 'Dark Voyager',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Sector_1_1 = new ol.format.GeoJSON();
var features_Sector_1_1 = format_Sector_1_1.readFeatures(json_Sector_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_1_1.addFeatures(features_Sector_1_1);
var lyr_Sector_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sector_1_1, 
                style: style_Sector_1_1,
                interactive: false,
                title: '<img src="styles/legend/Sector_1_1.png" /> Sector_1'
            });
var format_Sectorul1poligon_2 = new ol.format.GeoJSON();
var features_Sectorul1poligon_2 = format_Sectorul1poligon_2.readFeatures(json_Sectorul1poligon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectorul1poligon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectorul1poligon_2.addFeatures(features_Sectorul1poligon_2);
var lyr_Sectorul1poligon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectorul1poligon_2, 
                style: style_Sectorul1poligon_2,
                interactive: false,
                title: '<img src="styles/legend/Sectorul1poligon_2.png" /> Sectorul 1 poligon'
            });
var format_Formaloturisituatie_strazi_s1mb_3 = new ol.format.GeoJSON();
var features_Formaloturisituatie_strazi_s1mb_3 = format_Formaloturisituatie_strazi_s1mb_3.readFeatures(json_Formaloturisituatie_strazi_s1mb_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formaloturisituatie_strazi_s1mb_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formaloturisituatie_strazi_s1mb_3.addFeatures(features_Formaloturisituatie_strazi_s1mb_3);
var lyr_Formaloturisituatie_strazi_s1mb_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Formaloturisituatie_strazi_s1mb_3, 
                style: style_Formaloturisituatie_strazi_s1mb_3,
                interactive: false,
                title: '<img src="styles/legend/Formaloturisituatie_strazi_s1mb_3.png" /> Forma loturi — situatie_strazi_s1mb'
            });
var format_StraziadministratedeS1MB_4 = new ol.format.GeoJSON();
var features_StraziadministratedeS1MB_4 = format_StraziadministratedeS1MB_4.readFeatures(json_StraziadministratedeS1MB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraziadministratedeS1MB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraziadministratedeS1MB_4.addFeatures(features_StraziadministratedeS1MB_4);
var lyr_StraziadministratedeS1MB_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StraziadministratedeS1MB_4, 
                style: style_StraziadministratedeS1MB_4,
                interactive: true,
                title: '<img src="styles/legend/StraziadministratedeS1MB_4.png" /> Strazi administrate de S1MB'
            });
var format_StraziadministratedeASB_5 = new ol.format.GeoJSON();
var features_StraziadministratedeASB_5 = format_StraziadministratedeASB_5.readFeatures(json_StraziadministratedeASB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraziadministratedeASB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraziadministratedeASB_5.addFeatures(features_StraziadministratedeASB_5);
var lyr_StraziadministratedeASB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StraziadministratedeASB_5, 
                style: style_StraziadministratedeASB_5,
                interactive: false,
                title: '<img src="styles/legend/StraziadministratedeASB_5.png" /> Strazi administrate de ASB'
            });
var format_Lucrarioperatoriutilitati_6 = new ol.format.GeoJSON();
var features_Lucrarioperatoriutilitati_6 = format_Lucrarioperatoriutilitati_6.readFeatures(json_Lucrarioperatoriutilitati_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lucrarioperatoriutilitati_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lucrarioperatoriutilitati_6.addFeatures(features_Lucrarioperatoriutilitati_6);
var lyr_Lucrarioperatoriutilitati_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lucrarioperatoriutilitati_6, 
                style: style_Lucrarioperatoriutilitati_6,
                interactive: false,
                title: '<img src="styles/legend/Lucrarioperatoriutilitati_6.png" /> Lucrari operatori utilitati'
            });
var format_PCA_2023Reparatii_7 = new ol.format.GeoJSON();
var features_PCA_2023Reparatii_7 = format_PCA_2023Reparatii_7.readFeatures(json_PCA_2023Reparatii_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCA_2023Reparatii_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCA_2023Reparatii_7.addFeatures(features_PCA_2023Reparatii_7);
var lyr_PCA_2023Reparatii_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCA_2023Reparatii_7, 
                style: style_PCA_2023Reparatii_7,
                interactive: false,
                title: '<img src="styles/legend/PCA_2023Reparatii_7.png" /> PCA_2023 Reparatii'
            });
var format_Ordindeinceperecadastrareavizeacorduri_8 = new ol.format.GeoJSON();
var features_Ordindeinceperecadastrareavizeacorduri_8 = format_Ordindeinceperecadastrareavizeacorduri_8.readFeatures(json_Ordindeinceperecadastrareavizeacorduri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ordindeinceperecadastrareavizeacorduri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ordindeinceperecadastrareavizeacorduri_8.addFeatures(features_Ordindeinceperecadastrareavizeacorduri_8);
var lyr_Ordindeinceperecadastrareavizeacorduri_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ordindeinceperecadastrareavizeacorduri_8, 
                style: style_Ordindeinceperecadastrareavizeacorduri_8,
                interactive: false,
                title: '<img src="styles/legend/Ordindeinceperecadastrareavizeacorduri_8.png" /> Ordin de incepere cadastrare/avize/acorduri'
            });
var format_StrazivotatedeCLS1_9 = new ol.format.GeoJSON();
var features_StrazivotatedeCLS1_9 = format_StrazivotatedeCLS1_9.readFeatures(json_StrazivotatedeCLS1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrazivotatedeCLS1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrazivotatedeCLS1_9.addFeatures(features_StrazivotatedeCLS1_9);
var lyr_StrazivotatedeCLS1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrazivotatedeCLS1_9, 
                style: style_StrazivotatedeCLS1_9,
                interactive: false,
                title: '<img src="styles/legend/StrazivotatedeCLS1_9.png" /> Strazi votate de CLS1'
            });
var format_LucrarideReparatii_10 = new ol.format.GeoJSON();
var features_LucrarideReparatii_10 = format_LucrarideReparatii_10.readFeatures(json_LucrarideReparatii_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LucrarideReparatii_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LucrarideReparatii_10.addFeatures(features_LucrarideReparatii_10);
var lyr_LucrarideReparatii_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LucrarideReparatii_10, 
                style: style_LucrarideReparatii_10,
                interactive: false,
                title: '<img src="styles/legend/LucrarideReparatii_10.png" /> Lucrari de Reparatii'
            });
var format_StrazirespinsedeCLS1_11 = new ol.format.GeoJSON();
var features_StrazirespinsedeCLS1_11 = format_StrazirespinsedeCLS1_11.readFeatures(json_StrazirespinsedeCLS1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrazirespinsedeCLS1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrazirespinsedeCLS1_11.addFeatures(features_StrazirespinsedeCLS1_11);
var lyr_StrazirespinsedeCLS1_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrazirespinsedeCLS1_11, 
                style: style_StrazirespinsedeCLS1_11,
                interactive: false,
                title: '<img src="styles/legend/StrazirespinsedeCLS1_11.png" /> Strazi respinse de CLS1'
            });
var format_Lot2pasted_features_12 = new ol.format.GeoJSON();
var features_Lot2pasted_features_12 = format_Lot2pasted_features_12.readFeatures(json_Lot2pasted_features_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lot2pasted_features_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lot2pasted_features_12.addFeatures(features_Lot2pasted_features_12);
var lyr_Lot2pasted_features_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lot2pasted_features_12, 
                style: style_Lot2pasted_features_12,
                interactive: false,
                title: '<img src="styles/legend/Lot2pasted_features_12.png" /> Lot 2 — pasted_features'
            });
var format_Lot1pasted_features_13 = new ol.format.GeoJSON();
var features_Lot1pasted_features_13 = format_Lot1pasted_features_13.readFeatures(json_Lot1pasted_features_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lot1pasted_features_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lot1pasted_features_13.addFeatures(features_Lot1pasted_features_13);
var lyr_Lot1pasted_features_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lot1pasted_features_13, 
                style: style_Lot1pasted_features_13,
                interactive: false,
                title: '<img src="styles/legend/Lot1pasted_features_13.png" /> Lot 1 — pasted_features'
            });
var format_Lot3pasted_features_14 = new ol.format.GeoJSON();
var features_Lot3pasted_features_14 = format_Lot3pasted_features_14.readFeatures(json_Lot3pasted_features_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lot3pasted_features_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lot3pasted_features_14.addFeatures(features_Lot3pasted_features_14);
var lyr_Lot3pasted_features_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lot3pasted_features_14, 
                style: style_Lot3pasted_features_14,
                interactive: false,
                title: '<img src="styles/legend/Lot3pasted_features_14.png" /> Lot 3 — pasted_features'
            });
var format_Lot4pasted_features_15 = new ol.format.GeoJSON();
var features_Lot4pasted_features_15 = format_Lot4pasted_features_15.readFeatures(json_Lot4pasted_features_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lot4pasted_features_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lot4pasted_features_15.addFeatures(features_Lot4pasted_features_15);
var lyr_Lot4pasted_features_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lot4pasted_features_15, 
                style: style_Lot4pasted_features_15,
                interactive: false,
                title: '<img src="styles/legend/Lot4pasted_features_15.png" /> Lot 4 — pasted_features'
            });

lyr_DarkVoyager_0.setVisible(true);lyr_Sector_1_1.setVisible(true);lyr_Sectorul1poligon_2.setVisible(true);lyr_Formaloturisituatie_strazi_s1mb_3.setVisible(true);lyr_StraziadministratedeS1MB_4.setVisible(true);lyr_StraziadministratedeASB_5.setVisible(true);lyr_Lucrarioperatoriutilitati_6.setVisible(true);lyr_PCA_2023Reparatii_7.setVisible(true);lyr_Ordindeinceperecadastrareavizeacorduri_8.setVisible(true);lyr_StrazivotatedeCLS1_9.setVisible(true);lyr_LucrarideReparatii_10.setVisible(true);lyr_StrazirespinsedeCLS1_11.setVisible(true);lyr_Lot2pasted_features_12.setVisible(true);lyr_Lot1pasted_features_13.setVisible(true);lyr_Lot3pasted_features_14.setVisible(true);lyr_Lot4pasted_features_15.setVisible(true);
var layersList = [lyr_DarkVoyager_0,lyr_Sector_1_1,lyr_Sectorul1poligon_2,lyr_Formaloturisituatie_strazi_s1mb_3,lyr_StraziadministratedeS1MB_4,lyr_StraziadministratedeASB_5,lyr_Lucrarioperatoriutilitati_6,lyr_PCA_2023Reparatii_7,lyr_Ordindeinceperecadastrareavizeacorduri_8,lyr_StrazivotatedeCLS1_9,lyr_LucrarideReparatii_10,lyr_StrazirespinsedeCLS1_11,lyr_Lot2pasted_features_12,lyr_Lot1pasted_features_13,lyr_Lot3pasted_features_14,lyr_Lot4pasted_features_15];
lyr_Sector_1_1.set('fieldAliases', {'fid': 'fid', 'natcode': 'natcode', 'name': 'name', 'natLevName': 'natLevName', 'countyId': 'countyId', 'countyCode': 'countyCode', 'county': 'county', 'countyMn': 'countyMn', 'regionId': 'regionId', 'regionCode': 'regionCode', 'region': 'region', 'pop2011': 'pop2011', 'pop2012': 'pop2012', 'pop2013': 'pop2013', 'pop2014': 'pop2014', 'pop2015': 'pop2015', 'pop2020': 'pop2020', 'version': 'version', });
lyr_Sectorul1poligon_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Formaloturisituatie_strazi_s1mb_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StraziadministratedeS1MB_4.set('fieldAliases', {'full_id': 'full_id', 'Nume str.': 'Nume str.', 'Lot': 'Lot', 'Emitere OI': 'Emitere OI', 'Et parcurs': 'Et parcurs', 'Et in curs': 'Et in curs', 'Data fin.': 'Data fin.', 'Comentarii': 'Comentarii', 'Tipul luc.': 'Tipul luc.', 'Interventi': 'Interventi', 'L. utilist': 'L. utilist', });
lyr_StraziadministratedeASB_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'LOT': 'LOT', });
lyr_Lucrarioperatoriutilitati_6.set('fieldAliases', {'full_id': 'full_id', 'name': 'name', 'Intervnet2': 'Intervnet2', });
lyr_PCA_2023Reparatii_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Intervneti': 'Intervneti', });
lyr_Ordindeinceperecadastrareavizeacorduri_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Votata de': 'Votata de', });
lyr_StrazivotatedeCLS1_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Votata de': 'Votata de', });
lyr_LucrarideReparatii_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Obiectiv d': 'Obiectiv d', });
lyr_StrazirespinsedeCLS1_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', 'Votata de': 'Votata de', });
lyr_Lot2pasted_features_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lot1pasted_features_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lot3pasted_features_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lot4pasted_features_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sector_1_1.set('fieldImages', {'fid': '', 'natcode': '', 'name': '', 'natLevName': '', 'countyId': '', 'countyCode': '', 'county': '', 'countyMn': '', 'regionId': '', 'regionCode': '', 'region': '', 'pop2011': '', 'pop2012': '', 'pop2013': '', 'pop2014': '', 'pop2015': '', 'pop2020': '', 'version': '', });
lyr_Sectorul1poligon_2.set('fieldImages', {'fid': '', 'id': '', });
lyr_Formaloturisituatie_strazi_s1mb_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_StraziadministratedeS1MB_4.set('fieldImages', {'full_id': 'Hidden', 'Nume str.': 'TextEdit', 'Lot': 'Hidden', 'Emitere OI': 'TextEdit', 'Et parcurs': 'TextEdit', 'Et in curs': 'TextEdit', 'Data fin.': 'TextEdit', 'Comentarii': 'TextEdit', 'Tipul luc.': 'TextEdit', 'Interventi': 'Hidden', 'L. utilist': 'TextEdit', });
lyr_StraziadministratedeASB_5.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'LOT': '', });
lyr_Lucrarioperatoriutilitati_6.set('fieldImages', {'full_id': '', 'name': '', 'Intervnet2': '', });
lyr_PCA_2023Reparatii_7.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Intervneti': '', });
lyr_Ordindeinceperecadastrareavizeacorduri_8.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Votata de': '', });
lyr_StrazivotatedeCLS1_9.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Votata de': '', });
lyr_LucrarideReparatii_10.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Obiectiv d': '', });
lyr_StrazirespinsedeCLS1_11.set('fieldImages', {'fid': '', 'full_id': '', 'name': '', 'Votata de': '', });
lyr_Lot2pasted_features_12.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lot1pasted_features_13.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lot3pasted_features_14.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lot4pasted_features_15.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Sector_1_1.set('fieldLabels', {'fid': 'no label', 'natcode': 'no label', 'name': 'no label', 'natLevName': 'no label', 'countyId': 'no label', 'countyCode': 'no label', 'county': 'no label', 'countyMn': 'no label', 'regionId': 'no label', 'regionCode': 'no label', 'region': 'no label', 'pop2011': 'no label', 'pop2012': 'no label', 'pop2013': 'no label', 'pop2014': 'no label', 'pop2015': 'no label', 'pop2020': 'no label', 'version': 'no label', });
lyr_Sectorul1poligon_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Formaloturisituatie_strazi_s1mb_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_StraziadministratedeS1MB_4.set('fieldLabels', {'Nume str.': 'header label', 'Emitere OI': 'header label', 'Et parcurs': 'header label', 'Et in curs': 'header label', 'Data fin.': 'header label', 'Comentarii': 'header label', 'Tipul luc.': 'header label', 'L. utilist': 'header label', });
lyr_StraziadministratedeASB_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'LOT': 'no label', });
lyr_Lucrarioperatoriutilitati_6.set('fieldLabels', {'full_id': 'no label', 'name': 'no label', 'Intervnet2': 'no label', });
lyr_PCA_2023Reparatii_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Intervneti': 'no label', });
lyr_Ordindeinceperecadastrareavizeacorduri_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Votata de': 'no label', });
lyr_StrazivotatedeCLS1_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Votata de': 'no label', });
lyr_LucrarideReparatii_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Obiectiv d': 'no label', });
lyr_StrazirespinsedeCLS1_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'name': 'no label', 'Votata de': 'no label', });
lyr_Lot2pasted_features_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lot1pasted_features_13.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lot3pasted_features_14.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lot4pasted_features_15.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lot4pasted_features_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
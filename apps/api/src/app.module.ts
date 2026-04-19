import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { GanaderosModule } from './modules/ganaderos/ganaderos.module';
import { AnimalesModule } from './modules/animales/animales.module';
import { MunicipiosModule } from './modules/municipios/municipios.module';
import { GobernacionesModule } from './modules/gobernaciones/gobernaciones.module';
import { InstitucionesModule } from './modules/instituciones/instituciones.module';
import { GremiosModule } from './modules/gremios/gremios.module';
import { ControlGanaderoModule } from './modules/control-ganadero/control-ganadero.module';
import { ReportesModule } from './modules/reportes/reportes.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
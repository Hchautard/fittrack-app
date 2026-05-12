import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxEchartsDirective],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  providers: [provideEchartsCore({ echarts })]
})
export class App {
  protected readonly title = signal('fittrack-app');
}

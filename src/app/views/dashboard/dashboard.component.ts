import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
  border: string;
  goodsRegistered: number;
  goodsDeclared: number;
  goodsnotDeclared: number;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {
  }

  public users: IUser[] = [
    {
      name: 'Muhumuza Ivan',
      state: 'New',
      registered: 'Jan 1, 2022',
      country: 'Ug',
      usage: 70,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
      border: 'Bunagana',
      goodsRegistered:1098,
      goodsDeclared: 1000,
      goodsnotDeclared:98
    },
    {
      name: 'Atuhairwe Angella',
      state: 'Recurring ',
      registered: 'Jan 1, 2022',
      country: 'Br',
      usage: 30,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
      border: 'Mpondwe',
      goodsRegistered:576,
      goodsDeclared: 120,
      goodsnotDeclared:456
    },
    {
      name: 'Albert Kwikiriza',
      state: 'New',
      registered: 'Jan 1, 2022',
      country: 'In',
      usage: 54,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
      border: 'Malaba',
      goodsRegistered: 353,
      goodsDeclared: 230,
      goodsnotDeclared:123
    },
    {
      name: 'Kanyesigye Godfrey',
      state: 'Sleep',
      registered: 'Jan 1, 2022',
      country: 'Fr',
      usage: 88,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
      border: 'Bunagana',
      goodsRegistered: 1201,
      goodsDeclared: 1098,
      goodsnotDeclared:103
    },
    {
      name: 'Ongom Peter',
      state: 'New',
      registered: 'Jan 1, 2022',
      country: 'Es',
      usage: 92,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
      border: 'Katuna',
      goodsRegistered: 113,
      goodsDeclared: 103,
      goodsnotDeclared:10
    },
    {
      name: 'Friderik Lutaaya',
      state: 'New',
      registered: 'Jan 1, 2022',
      country: 'Pl',
      usage: 83,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
      border: 'Malaba',
      goodsRegistered: 123,
      goodsDeclared: 100,
      goodsnotDeclared:23
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}

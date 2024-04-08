import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import React, {useState} from 'react';
import colors from './styles/colors';

export default function App() {
  const [addDays, setAddDays] = useState<string>('');
  const [subtractDays, setSubtractDays] = useState<string>('');

  function currentDate(): Date {
    return new Date();
  }

  function onAddDays({date, daysToAdd}: {date: Date; daysToAdd: number}): Date {
    date.setDate(date.getDate() + daysToAdd);
    return date;
  }

  function onSubstractDays({
    date,
    daysToSubtract,
  }: {
    date: Date;
    daysToSubtract: number;
  }) {
    date.setDate(date.getDate() - daysToSubtract);
    return date;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <View style={styles.dateContainer}>
        <Text style={styles.title}>Hoje</Text>
        <Text style={styles.currentDateText}>
          {currentDate().toLocaleString('pt-BR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
        <View style={styles.operationDateContainer}>
          <Text style={styles.title}>Adicionando Dias</Text>
          <TextInput
            placeholder="Adicionar quantos dias..."
            style={styles.operationDateInput}
            keyboardType="number-pad"
            onChangeText={setAddDays}
          />
          <Text style={styles.operationDate}>
            {addDays
              ? onAddDays({
                  date: new Date(),
                  daysToAdd: Number(addDays),
                }).toLocaleString('pt-BR', {
                  dateStyle: 'full',
                })
              : currentDate().toLocaleString('pt-BR', {dateStyle: 'full'})}
          </Text>
        </View>
        <View style={styles.operationDateContainer}>
          <Text style={styles.title}>Subtraindo Dias</Text>
          <TextInput
            placeholder="Subtrair quantos dias..."
            style={styles.operationDateInput}
            keyboardType="number-pad"
            onChangeText={setSubtractDays}
          />
          <Text style={styles.operationDate}>
            {subtractDays
              ? onSubstractDays({
                  date: new Date(),
                  daysToSubtract: Number(subtractDays),
                }).toLocaleString('pt-BR', {
                  dateStyle: 'full',
                })
              : currentDate().toLocaleString('pt-BR', {dateStyle: 'full'})}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  dateContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
  currentDateText: {
    fontSize: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  operationDateContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginBottom: 16,
    borderRadius: 8,
  },
  operationDateInput: {
    width: '100%',
    backgroundColor: colors.gray,
  },
  operationDate: {
    fontSize: 20,
    paddingVertical: 16,
  },
});
